import React from 'react'
import {NavLink} from 'react-router-dom'

const Hero = () => (
  <div className='hero-body'>
    <div className='container'>
      <h1 className='title'>
        Meetup chat
      </h1>
      <h2 className='subtitle'>
        the best chat around {'<3'}
      </h2>
    </div>
  </div>
)

const FooterTabs = () => (
  <div className='hero-foot'>
    <nav className='tabs'>
      <div className='container'>
        <ul>
        <NavLink activeStyle={{
            background: '#3273dc'
          }} exact to='/'>home</NavLink>{' '}
          <NavLink activeStyle={{
            background: '#3273dc'
          }} to='/conversations'>conversations</NavLink>{' '}
          <NavLink activeStyle={{
            background: '#3273dc'
          }} to='/dashboard'>dashboard</NavLink>{' '}
        </ul>
      </div>
    </nav>
  </div>
)

export const MainNavigation = (proos) => (
  <section className='hero is-dark'>
    <Hero />
    <FooterTabs />
  </section>
)
