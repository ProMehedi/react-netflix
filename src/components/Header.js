import React from 'react'
import GetStartedForm from './GetStartedForm'
import Navbar from './Navbar'

const Header = ({ bg }) => {
  return (
    <div
      className='py-6'
      style={{
        background: `url(${
          bg ? `/images/misc/${bg}.jpg` : '/images/misc/home-bg.jpg'
        }) top center / cover no-repeat`,
      }}
    >
      <Navbar />
      <div className='text-center text-white py-14 md:py-20 lg:py-32 xl:py-40'>
        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
          Unlimited movies, TV <br /> shows, and more.
        </h1>
        <h3 className='mt-4 font-medium text-base md:text-xl lg:text-2xl xl:text-3xl'>
          Watch anywhere. Cancel anytime.
        </h3>
        <GetStartedForm />
      </div>
    </div>
  )
}

export default Header
