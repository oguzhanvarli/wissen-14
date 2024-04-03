import React from 'react'
import { useState } from 'react'

const CounterSample = () => {

  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <h1 style={{margin: '30px'}}>{counter}</h1>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default CounterSample