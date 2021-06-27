import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderContainer from '../components/header/HeaderContainer'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isValid = email === '' || password === ''

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <HeaderContainer>
        <div className='container mx-auto px-4 flex justify-center'>
          <div className='my-5 py-5 md:py-8 md:pb-40 px-8 md:px-10 lg:px-20 text-white w-full md:w-8/12 lg:w-6/12 bg-black bg-opacity-75 rounded'>
            <h4 className='font-bold text-base md:text-2xl xl:text-3xl mb-3 md:mb-5'>
              Sign In
            </h4>
            <form onSubmit={submitHandler}>
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
                Sign In
              </button>
              <p className='text-gray-400 my-3'>
                New to Netflix?
                <Link to='/signup' className='text-white font-bold ml-1'>
                  Sign Up Now
                </Link>
                .
              </p>
              <p className='text-gray-400 text-sm'>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </p>
            </form>
          </div>
        </div>
      </HeaderContainer>
    </>
  )
}

export default Signin
