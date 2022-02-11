import React, { useState, useEffect } from 'react'
import Timer from './Timer'

const TimerContainer: React.VFC = () => {
  const [display, setDisplay] = useState(true)
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Switch Timer</button>
      {display && <Timer />}
    </div>
  )
}

export default TimerContainer
