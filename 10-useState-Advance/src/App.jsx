import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(4)

  const onChange=()=>{
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={onChange}>Click Here </button>
    </div>
  )
}

export default App