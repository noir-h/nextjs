import React, { useState } from 'react'

interface Props {
  text: string
}
interface UserData {
  id: number
  name: string
}
const Basic1: React.VFC<Props> = (props) => {
  const [count, setCount] = useState<number>(0)
  const [user, setUser] = useState<UserData>({ id: 3, name: 'sora' })
  const [inputData, setInputData] = useState('')

  // event
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputData(e.target.value)

  return (
    // flagment
    <>
      <h1>Hello {props.text}</h1>
      <input type="text" value={inputData} onChange={handleInputChange} />
      <h1>{inputData}</h1>
      {/* ひとつ前のstateをとる */}
      <button
        onClick={() => {
          setCount((prev) => prev + 1)
          setCount((prev) => prev + 1)
        }}
      >
        count {count}
      </button>
    </>
  )
}

export default Basic1
