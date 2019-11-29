import React from 'react'

import {UsersOnlineGraph} from '../users-online-graph'
import {largeObjects} from '../../../lib/large-objects'
import {StatsBar} from '../stats-bar'

class Dashboard extends React.Component {
  loadedData = []
  intervalKey
  abortController

  state = {
    usersOnline: 0,
    progress: 0,
    rating: 0
  }

  componentDidMount () {
    this.abortController = new AbortController()

    this.intervalKey = setInterval(() => {
      fetch(
        `http://localhost:8000/dashboard`,
        { signal: this.abortController.signal }
      )
      .then(r => r.json())
      .then((data) => {
        this.loadedData.push(data)
        this.setState({
          ...data,
        })
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          console.log('Oo noo bad error :\'( ')
        }
      })
    }, 500)
  }

  componentWillUnmount () {
    this.abortController.abort()
    clearInterval(this.intervalKey)
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
