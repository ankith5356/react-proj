import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './components/Cards'
import Button from './components/Button'

const App = () => {
    const [userData, setUserData] = useState([])

    const [index, setIndex] = useState(1)

const getData = async() => {
  const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
  setUserData(response.data)
  console.log(response.data)
}

useEffect(function(){
  getData()
},[index])

let printUserData = <h3 className='text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>LOADING....</h3>

if(userData.length > 0){
  printUserData = userData.map(function(elem,idx){

    return <div key={idx}>
      <Cards elem={elem} />
    </div>
  })
}

  return (
    <div className='bg-black min-h-screen p-1 text-white'>

     {/* Humme ab button se Data nahi chayie ab hum direct data utalete hai */}
      {/* <button className='bg-green-400 px-10 py-5 m-5  rounded-2xl active:scale-95 text-2xl'
      onClick={getData}
      >Get Data</button> */}
    
      <div className=' flex h[82%] flex-wrap gap-3 p-4'>
        {printUserData}
      </div>

      <Button  index={index} setIndex={setIndex} setUserData={setUserData} />

    </div>
  )
}

export default App
