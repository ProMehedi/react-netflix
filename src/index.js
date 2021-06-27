import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { firebase } from './config/firebase.prod'
import FirebaseContext from './context/FirebaseContext'

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <Router>
      <App />
    </Router>
  </FirebaseContext.Provider>,
  document.getElementById('root')
)
