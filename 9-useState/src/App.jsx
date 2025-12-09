import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function increaseNum(){
    setNum(num+1)
  }

    function decreaseNum(){
    setNum(num-1)
  }

  function jumpBy5(){
    setNum(num+5)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase By 1</button>
      <button onClick={decreaseNum}>Decrease By 1</button>
      <button onClick={jumpBy5}>Jump By 5</button>
    </div>
  )
}

export default App