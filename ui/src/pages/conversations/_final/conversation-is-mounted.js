import React from 'react'
import {getConversationMessages} from '../../lib/connection'
import {Loading} from '../components/loading'
import {Message} from '../components/message'

class Conversation extends React.Component {
  _isMounted = false
  state = {
    isLoading: true,
    messages: []
  }

  componentDidMount () {
    this._isMounted = true
    this.getConversationMessages(this.props.match.params.id)
  }

  componentDidUpdate (prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getConversationMessages(this.props.match.params.id)
    }
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  getConversationMessages (conversationId) {
    this.setState({
      isLoading: true,
      messages: []
    })

    fetch(
      `http://localhost:8000/conversations/${conversationId}`,
    )
    .then(r => r.json())
    .then((data) => {
      if (this._isMounted) {
        this.setState({
          isLoading: false,
          messages: data.messages
        })
      }
    })
    .catch((error) => {
      console.log('oo bad error')
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
