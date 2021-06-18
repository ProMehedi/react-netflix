import React from 'react'
import Faq from '../components/Faq'
import Jumbotron from '../components/Jumbotron'
import jumboData from '../fixtures/jumbo.json'

const Home = () => {
  return (
    <>
      {jumboData.map((item) => (
        <Jumbotron
          key={item.id}
          title={item.title}
          direction={item.direction}
          subTitle={item.subTitle}
          image={item.image}
          alt={item.alt}
        />
      ))}
      <Faq />
    </>
  )
}

export default Home
