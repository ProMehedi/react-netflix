import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { firebase } from './config/firebase.prod'

const App = () => {
  console.log(firebase)
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
