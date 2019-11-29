import React from 'react'

export const StatsBar = ({
  usersOnline,
  progress,
  rating,
}) => (
  <nav className='level'>
    <div className='level-item has-text-centered'>
      <div>
        <p className='heading'>users online</p>
        <p className='title'>{usersOnline}</p>
      </div>
    </div>
    <div className='level-item has-text-centered'>
      <div>
        <p className='heading'>Progress</p>
        <p className='title'>{progress}</p>
      </div>
    </div>
    <div className='level-item has-text-centered'>
      <div>
        <p className='heading'>rating</p>
        <p className='title'>{rating}</p>
      </div>
    </div>
  </nav>
)
