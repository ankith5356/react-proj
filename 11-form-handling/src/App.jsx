import React from 'react'

const App = () => {

  const onSubmit=(e)=>{
    e.preventDefault()
    console.log("Form Submitted")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        onSubmit(e)
      }}>
        <input type="text" placeholder='Enter Your Name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App