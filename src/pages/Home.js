import React from 'react'
import Jumbotron from '../components/Jumbotron'
import jumboData from '../fixtures/jumbo.json'

const Home = () => {
  return (
    <div>
      <div>
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
      </div>
      home page
    </div>
  )
}

export default Home
