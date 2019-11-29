import React from 'react'

export const Message = ({ message }) => (
  <article className='media'>
    <figure className='media-left'>
      <p className='image is-64x64'>
        <img src='https://bulma.io/images/placeholders/128x128.png' alt={`${message.name} profile`}/>
      </p>
    </figure>
    <div className='media-content'>
      <div className='content'>
        <p>
          <strong>{message.name}</strong> <small>{message.email}</small>
          <br />
          {message.message}
        </p>
      </div>
    </div>
  </article>
)
