import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='container py-3 md:py-8 mx-auto text-white'>
        <Link
          className='text-gray-500 mb-3 md:mb-8 inline-block duration-300 hover:underline hover:text-gray-400'
          to='/contact'
        >
          Questions? Contact us.
        </Link>
        <div className='flex flex-wrap'>
          <div className='w-full sm:w-1/2 md:w-3/12 pr-3'>
            <Link
              className='block mb-2 text-sm text-gray-500 hover:text-gray-400 hover:underline duration-200'
              to='/faq'
            >
              FAQ
            </Link>
            <Link
              className='block mb-2 text-sm text-gray-500 hover:text-gray-400 hover:underline duration-200'
              to='/investor-relations'
            >
              Investor Relations
            </Link>
            <Link
              className='block mb-2 text-sm text-gray-500 hover:text-gray-400 hover:underline duration-200'
              to='/privacy'
            >
              Privacy
            </Link>
            <Link
              className='block mb-2 text-sm text-gray-500 hover:text-gray-400 hover:underline duration-200'
              to='/speed-test'
            >
              Speed Test
            </Link>
          </div>
          <div className='w-full sm:w-1/2 md:w-3/12 pr-3'>
            <Link
              className='block mb-2 text-sm text-gray-500 hover:text-gray-400 hover:underline duration-200'
              to='/help-center'
            >
              Help Center
            </Link>
            <Link
              className='block mb-2 text-sm text-gray-500 hover:text-gray-400 hover:underline duration-200'
              to='/jobs'
            >
              Jobs
            </Link>
            <Link
              className='block mb-2 text-sm text-gray-500 hover:text-gray-400 hover:underline duration-200'
              to='/cookie-preferences'
            >
              Cookie Preferences
            </Link>
            <Link
              className='block mb-2 text-sm text-gray-500 hover:text-gray-400 hover:underline duration-200'
              to='/legal-notices'
            >
              Legal Notices
            </Link>
          </div>
          <div className='w-full sm:w-1/2 md:w-3/12 pr-3'>
            <Link
              className='block mb-2 text-sm text-gray-500 hover:text-gray-400 hover:underline duration-200'
              to='/account'
            >
              Account
            </Link>
            <Link
              className='block mb-2 text-sm text-gray-500 hover:text-gray-400 hover:underline duration-200'
              to='/ways-to-watch'
            >
              Ways to Watch
            </Link>
            <Link
              className='block mb-2 text-sm text-gray-500 hover:text-gray-400 hover:underline duration-200'
              to='/corporate-information'
            >
              Corporate Information
            </Link>
            <Link
              className='block mb-2 text-sm text-gray-500 hover:text-gray-400 hover:underline duration-200'
              to='/netflix-originals'
            >
              Netflix Originals
            </Link>
          </div>
          <div className='w-full sm:w-1/2 md:w-3/12'>
            <Link
              className='block mb-2 text-sm text-gray-500 hover:text-gray-400 hover:underline duration-200'
              to='/media-center'
            >
              Media Center
            </Link>
            <Link
              className='block mb-2 text-sm text-gray-500 hover:text-gray-400 hover:underline duration-200'
              to='/terms'
            >
              Terms of Use
            </Link>
            <Link
              className='block mb-2 text-sm text-gray-500 hover:text-gray-400 hover:underline duration-200'
              to='/contact'
            >
              Contact Us
            </Link>
          </div>
        </div>
        <p className='text-gray-500 mt-3 md:mt-8' to='/contact'>
          Netflix - React App
        </p>
      </div>
    </>
  )
}

export default Footer
