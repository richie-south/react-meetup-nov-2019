import React from 'react'
import {getConversationMessages} from '../../lib/connection'
import {Loading} from '../components/loading'
import {Message} from '../components/message'

class Conversation extends React.Component {
  state = {
    isLoading: true,
    messages: []
  }
  abortController

  componentDidMount () {
    this.abortController = new AbortController()

    this.getConversationMessages(this.props.match.params.id)
  }

  componentDidUpdate (prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.abortController.abort()
      this.abortController = new AbortController()
      this.getConversationMessages(this.props.match.params.id)
    }
  }

  componentWillUnmount () {
    this.abortController.abort()
  }

  getConversationMessages (conversationId) {
    this.setState({
      isLoading: true,
      messages: []
    })

    fetch(
      `http://localhost:8000/conversations/${conversationId}`,
      { signal: this.abortController.signal }
    )
    .then(r => r.json())
    .then((data) => {
      this.setState({
        isLoading: false,
        messages: data.messages
      })
    })
    .catch((error) => {
      if (error.name === 'AbortError') {
        console.log('fetch aborted')
      } else {
        console.log('oo bad error')
      }

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
