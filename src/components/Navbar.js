import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='px-5 md:px-14 mx-auto flex justify-between items-center'>
      <Link to='/'>
        <img src='/images/logo.svg' alt='Netflix' width='170' />
      </Link>
      <div>
        <Link
          to='/login'
          className='inline-block bg-red-600 text-white font-medium tex-base px-5 py-2 rounded'
        >
          Sign In
        </Link>
      </div>
    </div>
  )
}

export default Navbar