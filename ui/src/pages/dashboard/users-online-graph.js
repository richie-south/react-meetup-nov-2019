import React from 'react'
import chartXkcd from 'chart.xkcd'
import { Line } from 'chart.xkcd-react'

export const UsersOnlineGraph = ({ loadedData }) => (
  <div className='container'>
    <div className='notification'>
      <Line
        config={{
          title: 'Users online',
          xLabel: 'time',
          yLabel: 'users',
          data: {
            labels: loadedData.map((data) => {
              const date = new Date(data.timestamp)
              return `${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}-${date.getMilliseconds()}`
            }).reverse().slice(0, 40).reverse(),
            datasets: [{
              label: 'online users',
              data:  loadedData.map((data) => data.usersOnline).reverse().slice(0, 40).reverse()
            },],
          },
          options: {
            yTickCount: 10,
            legendPosition: chartXkcd.config.positionType.upLeft
          }
        }}
      />
    </div>
  </div>
)
