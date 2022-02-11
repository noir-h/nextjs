import { cleanup } from '@testing-library/react'
import React, { useState, useEffect } from 'react'

const Timer: React.VFC = () => {
  const [count, setCount] = useState(0)
  const time = () => {
    setCount((prev) => prev + 1)
  }

  useEffect(() => {
    const interbal = setInterval(time, 1000)
    // return以降の処理はこのコンポーネントが破棄された時に実行される
    return () => {
      clearInterval(interbal)
      console.log('cleared')
    }
  }, [])

  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default Timer
