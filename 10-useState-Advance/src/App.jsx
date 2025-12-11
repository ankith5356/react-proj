import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user:'Ankit', age:20})

  const onChange=()=>{
   const newNum={...num}
   newNum.user='Manasa'
   newNum.age=22;
   setNum(newNum)
  }
  return (
    <div>
      <h1>{num.user} ,{num.age}</h1>
      <button onClick={onChange}>Click Here </button>
    </div>
  )
}

export default App