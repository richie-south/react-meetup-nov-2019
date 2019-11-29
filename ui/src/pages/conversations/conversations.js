import React from 'react'
import { Route } from 'react-router-dom'

import Conversation from './conversation'
import ConversationsList from './conversations-list'

class Conversations extends React.Component {

  render () {
    return (
      <section className='section'>
        <div className='columns'>
          <Route path='/' component={ConversationsList} />
          <Route path={`${this.props.match.path}/:id`} component={Conversation} />
        </div>
      </section>
    )
  }
}

export default Conversations
