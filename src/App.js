import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Signin from './pages/Signin'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={Signin} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
