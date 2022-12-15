import React from 'react'
import './Stats.css'

const Stats = () => {
  return (
    <div className='comp'>
        <div className="burst">
            <p>No. of burst: </p>
            <p>15</p>
        </div>
        <div className="peakCount">
            <p>Peak Count</p>
            <p>8000</p>
        </div>
        <div className="averagePeak">
            <p>Average Count</p>
            <p>3000</p>
        </div>
        <div className="duration">
            <p>Average Burst Duration</p>
            <p>200</p>
        </div>
    </div>
  )
}

export default Stats