import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState([10,20,30])

  const onChange=()=>{
    const newNum=[...num]
    newNum.push(5)
    setNum(newNum)

  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={onChange}>Click Here </button>
    </div>
  )
}

export default App