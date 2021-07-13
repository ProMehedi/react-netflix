import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderContainer from '../components/header/HeaderContainer'
import FirebaseContext from '../context/FirebaseContext'
import AuthListener from '../hooks/AuthListener'

const Signup = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const isValid = name === '' || email === '' || password === ''

  const { firebase } = useContext(FirebaseContext)

  const { user } = AuthListener()

  if (user) {
    history.push('/')
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      const reqAuth = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)

      await reqAuth.user.updateProfile({
        displayName: name,
        photoURL: `/images/users/${Math.floor(Math.random() * 5) + 1}.png`,
      })

      // Redirect to home page
      history.push('/signin')

      // Clear Form Data
      setName('')
      setEmail('')
      setPassword('')
      setMessage('')
    } catch (err) {
      setMessage(err.message)
    }
  }

  return (
    <>
      <HeaderContainer>
        <div className='container mx-auto px-4 flex justify-center'>
          <div className='my-5 py-5 md:py-8 md:pb-40 px-8 md:px-10 lg:px-20 text-white w-full md:w-8/12 lg:w-6/12 bg-black bg-opacity-75 rounded'>
            <h4 className='font-bold text-base md:text-2xl xl:text-3xl mb-3 md:mb-5'>
              Sign Up
            </h4>
            <form onSubmit={submitHandler}>
              <input
                className='w-full px-4 py-3 bg-gray-800 rounded mb-4'
                type='text'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter full name'
              />
              <input
                className='w-full px-4 py-3 bg-gray-800 rounded mb-4'
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter email address'
              />
              <input
                className='w-full px-4 py-3 bg-gray-800 rounded mb-4'
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter password'
              />
              <button
                type='submit'
                disabled={isValid}
                className='w-full font-semibold text-center text-white duration-200 bg-red-600 focus:bg-red-700 hover:bg-red-700 px-4 py-3 text-base rounded disabled:opacity-50 disabled:cursor-not-allowed'
              >
                Sign Up
              </button>
              <p className='text-gray-400 my-3'>
                Already have an account??
                <Link to='/signin' className='text-white font-bold ml-1'>
                  Sign In Now
                </Link>
                .
              </p>
              {message && (
                <p className='text-red-900 font-semibold text-xs bg-red-300 px-4 py-2 rounded'>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </HeaderContainer>
    </>
  )
}

export default Signup
