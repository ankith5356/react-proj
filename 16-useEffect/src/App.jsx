// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'

// const App = () => {
// const [num, setNum] = useState(0)
// const [num2, setNum2] = useState(100)

//   useEffect(function(){
//     console.log("Use effect chal raha hai")
//   },[num])

//   return (
//     <div>
//        <h1>Num is {num} </h1>
//        <h1>Num is {num2}</h1>

//       <button
//       onMouseEnter={()=>{
//        setNum(num+1)
//       }}

//       onMouseLeave={()=>{
//       setNum2(num2+10)
//       }}
//       >Hello
//       </button>
     
//     </div>
//   )
// }

// export default App

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChange(){
    console.log("A Chal raha hai")
  }

  function bChange(){
    console.log("B Chal raha hai")
  }

  useEffect(function(){
    aChange()
    console.log("Use effect A is Running..")
  },[a])

    useEffect(function(){
      bChange()
    console.log("Use effect B is Running..")
  },[b])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
       onClick={()=>{
        setA(a+1)
      }}>Change A
      </button>

      <button
       onClick={()=>{
        setB(b-1)
      }}>Change B
      </button>
    </div>
  )
}

export default App