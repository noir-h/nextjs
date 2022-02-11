import React, { useReducer } from 'react'

const initialCount: number = 0

type ACTIONTYPE =
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: string }

// callback = (state, action)
const reducer = (count: typeof initialCount, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'increment':
      return count + action.payload
    case 'decrement':
      return count - Number(action.payload)
    default:
      throw new Error()
  }
}

const BasicReducer = () => {
  // useReducer(callback, 初期値)
  const [count, dispatch] = React.useReducer(reducer, initialCount)
  return (
    <>
      Count: {count}
      <button onClick={() => dispatch({ type: 'decrement', payload: '5' })}>
        -
      </button>
      <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>
        +
      </button>
    </>
  )
}

export default BasicReducer
