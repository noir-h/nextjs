import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'

const C = () => {
  const value = useContext(AppContext)
  return (
    <div>
      <h1>C</h1>
      {value}
    </div>
  )
}

export default C
