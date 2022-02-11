import React, { useState, useMemo } from 'react'
const Memo = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const AddCount1 = () => {
    setCount1((prev) => prev + 1)
  }
  const AddCount2 = () => {
    setCount2((prev) => prev + 1)
  }

  // const isOdd = () => {
  //   let i = 0
  //   while (i < 500000000) i++
  //   return count1 % 2 !== 0
  // }

  //   return count1 % 2 !== 0
  const isOdd = useMemo(() => {
    let i = 0
    while (i < 500000000) i++
    return count1 % 2 !== 0
  }, [count1])
  return (
    <div>
      <button onClick={AddCount1}>Count1 {count1}</button>
      <br />
      <span>{isOdd ? 'odd number' : 'even number'}</span>
      <br />
      <button onClick={AddCount2}>Count2 {count2}</button>
    </div>
  )
}

export default Memo
