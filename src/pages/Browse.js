import React from 'react'
import UseContent from '../hooks/UseContent'

const Browse = () => {
  const { films } = UseContent('films')
  console.log(films)
  return <div>Browse</div>
}

export default Browse
