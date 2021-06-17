import React from 'react'

const Jumbotron = ({ title, subTitle, image, alt, direction }) => {
  return (
    <div className='bg-black py-8 px-8 text-white border-b-8 border-gray-800'>
      <div className='container mx-auto'>
        <div
          className={`flex items-center justify-between flex-col md:${direction}`}
        >
          <div className='w-full md:w-1/2 py-5'>
            <h1 className='font-bold mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
              {title}
            </h1>
            <h2 className='text-sm sm:text-base lg:text-xl xl:text-2xl'>
              {subTitle}
            </h2>
          </div>
          <div className='w-full md:w-1/2 py-5 md:py-0'>
            <img src={image} alt={alt} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron
