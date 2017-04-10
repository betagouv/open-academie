import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css'

import Menu from './Menu.js'
import Home from './Home.js'
import Bourse from './Bourse.js'

ReactDOM.render(
  <Router>
    <div>
      <Menu />

      <Route exact path="/" component={Home}/>
      <Route path="/bourse" component={Bourse}/>
    </div>
  </Router>,
  document.getElementById('root')
)
