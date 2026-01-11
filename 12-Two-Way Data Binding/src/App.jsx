import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('bsdk')
  const onSubmit=(e)=>{
    e.preventDefault()
    console.log("Form Submitted by", title)

    setTitle('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        onSubmit(e)
      }}>
        <input type="text" placeholder='Enter Your Name'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App