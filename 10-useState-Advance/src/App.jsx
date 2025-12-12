import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user:'Ankit',age:22})

  const onChange=()=>{
    setNum(prev=>({ ...prev,age:23,user:'Babe'}))
  }
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={onChange}>Click Here </button>
    </div>
  )
}

export default App