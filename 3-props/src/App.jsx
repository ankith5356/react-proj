import React from 'react'
import Card from './components/Cards'

const App = () => {
  return (
    <div className="parent">

     <Card user='Ankit' img='https://images.unsplash.com/photo-1761880619787-56285c7f5f1f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600'/>
     <Card user='Manasa' img='https://images.unsplash.com/photo-1761996771948-cc23b5aa1193?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600'/>
    </div>
  )
}

export default App