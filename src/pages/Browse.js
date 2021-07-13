import React from 'react'
import UseContent from '../hooks/UseContent'
import slideSchema from '../utils/slideSchema'

const Browse = () => {
  const { series } = UseContent('series')
  const { films } = UseContent('films')
  const slides = slideSchema({ series, films })
  console.log(slides)
  return <div>Browse</div>
}

export default Browse
