import React, { useState } from 'react'

const AccordionItem = ({ title, content }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <li
      className='bg-gray-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-2'
      onClick={() => setToggle(!toggle)}
    >
      <button className='flex items-center justify-between w-full p-3 md:p-5 border-b-2 border-gray-900 focus:outline-none cursor-pointer'>
        {title}
        <svg
          id='thin-x'
          viewBox='0 0 26 26'
          className={`duration-300 ${!toggle ? 'transform -rotate-45' : ''}`}
          focusable='true'
          fill='#fff'
          width='1.2em'
          height='1.2em'
        >
          <path d='M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z'></path>
        </svg>
      </button>

      <div
        className={`duration-200 ${
          toggle
            ? 'max-h-96 p-2 md:p-5'
            : 'px-2 md:px-5 max-h-0 overflow-hidden'
        }`}
      >
        {content}
      </div>
    </li>
  )
}

export default AccordionItem
