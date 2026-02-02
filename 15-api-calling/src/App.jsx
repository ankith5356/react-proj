import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  // Fetch()
  // const getData = async () => {
  //  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //  const data = await response.json()
  //  console.log(data)
  // }

  // Axios()
  const [data, setData] = useState([])
    const getData= async() =>{
     const response = await axios('https://picsum.photos/v2/list?page=2&limit=15')
     setData(response.data)
    }
  
  return (
    <div>
      <button onClick={getData}>Click Bsdk</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>Hello {elem.author} {idx+1}</h3>
        })}
      </div>
    </div>
  )
}

export default App