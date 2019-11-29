import React from 'react'
import {Loading} from './components/loading'
import {Message} from './components/message'
import {saveCache} from '../../lib/cache'

class Conversation extends React.Component {
  state = {
    isLoading: true,
    messages: []
  }

  componentDidMount () {
    this.getConversationMessages(this.props.match.params.id)
  }

  componentDidUpdate (prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getConversationMessages(this.props.match.params.id)
    }
  }

  getConversationMessages (conversationId) {
    this.setState({
      isLoading: true,
      messages: []
    })

    // TODO: use cache

    fetch(
      `http://localhost:8000/conversations/${conversationId}`,
    )
    .then(r => r.json())
    .then((data) => {
      saveCache(data.messages)
      this.setState({
        isLoading: false,
        messages: data.messages
      })
    })
    .catch((error) => {
      console.log('Oo bad error :\'(')
    })
  }

  render () {
    return (
      <div className='column'>
        {this.state.isLoading && (
          <Loading />
        )}

        {this.state.messages && (
          this.state.messages.map((message) => (
            <Message message={message} key={message._id} />
          ))
        )}
      </div>
    )
  }
}

export default Conversation
