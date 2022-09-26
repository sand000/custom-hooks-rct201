import React, { useRef, useState } from 'react'
import useCountdown from '../Hooks/useCountdown'

const StopWatch = () => {
    const {start,pause, reset,time} = useCountdown(100)
    
  return (
    <div>
      <h1>{time}</h1>
      <button onClick={start}>start</button>
      <button onClick={pause}>pause</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default StopWatch
