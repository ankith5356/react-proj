import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

const users=[
  {  img:"https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
     intro:"",
     color:"royalblue",
     tag:"Satisfied"},

  {  img:"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8" ,
     intro:"",
     color:"orange",
     tag:"Underserved"},

  {  img:"https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8" ,
     intro:"",
     color:"magenta",
     tag:"Underbanked"},

 {  img:"https://images.unsplash.com/photo-1565597910646-348cc38ae222?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ5fHx8ZW58MHx8fHx8" ,
     intro:"",
     color:"seagreen",
     tag:"Unbiased"},
]
  return (
    <div>
     <Section1 users={users} />
     <Section2 />
    </div>
   
  )
}

export default App