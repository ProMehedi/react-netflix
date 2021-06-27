import React from 'react'

const GetStartedForm = () => {
  return (
    <form className='mt-5 md:mt-10 max-w-md md:max-w-lg lg:max-w-2xl w-11/12 mx-auto'>
      <h3 className='text-base md:text-xl text-white text-center mb-4'>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className='text-center px-5 md:px-0 md:flex md:flex-row'>
        <div className='flex-initial w-full'>
          <input
            className='w-full px-4 py-3 h-auto md:h-16 text-black rounded md:rounded-r-none md:rounded-l'
            type='email'
            name='email'
            placeholder='Email address'
          />
        </div>
        <button
          type='submit'
          className='mt-3 md:mt-0 flex-initial w-5/12 font-semibold text-center text-white duration-200 bg-red-600 focus:bg-red-700 hover:bg-red-700 px-4 py-3 md:py-4 h-auto md:h-16 text-base md:text-xl lg:text-2xl rounded md:rounded-r md:rounded-l-none'
        >
          Get Started
          <svg
            viewBox='0 0 6 12'
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            className='inline'
          >
            <desc>chevron</desc>
            <path
              d='M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z'
              fill='#fff'
              fillRule='evenodd'
            ></path>
          </svg>
        </button>
      </div>
    </form>
  )
}

export default GetStartedForm
