import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Conversations from './pages/conversations/conversations'
import Dashboard from './pages/dashboard/dashboard'
import { MainNavigation } from './components/main-navigation'

import 'bulma/css/bulma.css'

ReactDOM.render(
  <Router>
    <Route path='/' component={MainNavigation} />
    <Route path='/conversations' component={Conversations} />
    <Route path='/dashboard' exact component={Dashboard} />
  </Router>,
  document.getElementById('root')
)
