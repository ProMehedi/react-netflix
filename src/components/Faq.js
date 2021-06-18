import React from 'react'
import faqData from '../fixtures/faqs'
import AccordionItem from './AccordionItem'

const Faq = () => {
  return (
    <div className='border-b-8 border-gray-800'>
      <div className='container py-5 px-3 lg:py-10 mx-auto text-white'>
        <h1 className='font-bold mb-5 md:mb-10 text-xl sm:text-4xl lg:text-5xl text-center'>
          Frequently Asked Questions
        </h1>
        <ul className='my-5 max-w-3xl mx-auto font-medium'>
          {faqData.map((item) => (
            <AccordionItem
              key={item.id}
              title={item.header}
              content={item.body}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faq
