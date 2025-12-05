import React from 'react'

const App = () => {

  // Input Validation
  // const inputChanging=(elem)=>{
  //   console.log(elem)
  // }

  const click=(elem)=>{
    if(elem>500){
      console.log("Its Fine")
    }
    else{
      console.log("Its Amazing")
    }
  }

  return (
    <div onClick={(elem)=>{
      // console.log(elem.timeStamp);

      click(elem.screenX)
      
    }}>
      {/* Input Validation
      <h1>Hello </h1>
    <input onChange={function(elem){
      inputChanging(elem.target.value)
    }} type="text" placeholder='Enter Your Name'/> */}

        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>

    </div>
  )
}

export default App