import React from 'react'

export const Loading = () => (
  <div className='container'>
    <div className='notification'>
      <progress className='progress is-small is-dark' max='100'>15%</progress>
    </div>
  </div>
)
