import React from 'react'

const App = () => {

  const user={
    userName:'Ankit',
    age:22,
    city:"CKM"
  }

  localStorage.setItem('user',JSON.stringify(user))
  const usera=JSON.parse(localStorage.getItem('user'))

  console.log(usera)

  return (
    <div>App</div>
  )
}

export default App