import React from 'react'
import Navbar from './Navbar'

const HeaderContainer = ({ bg, children }) => {
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
      {children}
    </div>
  )
}

export default HeaderContainer
