import React from 'react'

import {UsersOnlineGraph} from './users-online-graph'
import {StatsBar} from './stats-bar'

class Dashboard extends React.Component {
  loadedData = []
  state = {
    usersOnline: 0,
    progress: 0,
    rating: 0
  }

  componentDidMount () {
    setInterval(() => {
      fetch(
        `http://localhost:8000/dashboard`,
      )
      .then(r => r.json())
      .then((data) => {
        this.loadedData.push(data)
        this.setState(data)
      })
      .catch((error) => {
        console.log('Oo noo bad error :\'( ')
      })
    }, 1000)
  }

  render () {
    return (
      <section className='section'>
        <StatsBar
          usersOnline={this.state.usersOnline}
          progress={this.state.progress}
          rating={this.state.rating}
        />

        <UsersOnlineGraph loadedData={this.loadedData} />
      </section>
    )
  }
}

export default Dashboard
