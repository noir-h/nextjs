import React, { useState, useEffect } from 'react'

const Basic4: React.VFC = () => {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState('')
  // 最初のレンダリングでのみ実行
  useEffect(() => {
    console.log('useEffect invoked')
  }, [])
  // itemのstateが変更されてリンダリングが起こっても実行されない
  useEffect(() => {
    console.log('useEffect invoked')
  }, [count])

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>click{count}</button>
      <input
        type="text"
        value={item}
        onChange={(evt) => setItem(evt.target.value)}
      />
    </div>
  )
}

export default Basic4
