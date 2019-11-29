import React from 'react'
import { NavLink } from 'react-router-dom'

class ConversationsList extends React.Component {

  render () {
    return (
      <div className='column is-one-quarter'>
        <aside className='menu'>
          <ul className="menu-list">
            <li><NavLink activeClassName='is-active' to="/conversations/0">General</NavLink></li>
            <li><NavLink activeClassName='is-active' to="/conversations/1">All about Stephen</NavLink></li>
            <li><NavLink activeClassName='is-active' to="/conversations/2">Topic react</NavLink></li>
            <li><NavLink activeClassName='is-active' to="/conversations/3">Team 4</NavLink></li>
            <li><NavLink activeClassName='is-active' to="/conversations/4">It-täst</NavLink></li>
            <li><NavLink activeClassName='is-active' to="/conversations/5">Party bunnies</NavLink></li>
            <li><NavLink activeClassName='is-active' to="/conversations/6">Adrienne Bradley</NavLink></li>
            <li><NavLink activeClassName='is-active' to="/conversations/7">Brisa Brennan</NavLink></li>
            <li><NavLink activeClassName='is-active' to="/conversations/8">Alberto Morgan</NavLink></li>
            <li><NavLink activeClassName='is-active' to="/conversations/9">Joe Tran</NavLink></li>
            <li><NavLink activeClassName='is-active' to="/conversations/10">Shirley Larson</NavLink></li>
            <li><NavLink activeClassName='is-active' to="/conversations/11">Samir Nolan</NavLink></li>
          </ul>
        </aside>
      </div>
    )
  }
}

export default ConversationsList
