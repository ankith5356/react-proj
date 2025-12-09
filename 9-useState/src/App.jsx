import React from 'react'
import { useState } from 'react'

const App = () => {
  const [user, setUser] = useState("Ankit")
  const [num, setNum] = useState(20)

function changeA(){
  setUser("Nirri")
  setNum(48)
}

  return (
    <div>
      <h1>Name of user is {user} <br /> </h1>
      <h1>Value Of Num is {num}</h1>
      <button onClick={changeA}>Click Me</button>
    </div>
  )
}

export default App