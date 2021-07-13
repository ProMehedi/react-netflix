import React from 'react'
import { useHistory } from 'react-router-dom'
import Faq from '../components/Faq'
import Header from '../components/header/index'
import Jumbotron from '../components/Jumbotron'
import jumboData from '../fixtures/jumbo.json'
import AuthListener from '../hooks/AuthListener'

const Home = () => {
  const history = useHistory()
  const { user } = AuthListener()

  if (!user) {
    history.push('/login')
  }

  return (
    <>
      <Header />
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
