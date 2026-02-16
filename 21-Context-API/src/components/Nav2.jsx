import React, { useContext } from 'react'
import { ThemedDataContext } from '../context/ThemeContext'


const Nav2 = (props) => {
    const [theme,setTheme] = useContext(ThemedDataContext)
  return (
    <div className='nav2'>
        <h2>About</h2>
        <h2>Contact</h2>
        <h2>Sales</h2>   
        <h2>{theme}</h2>  
    </div>
  )
}

export default Nav2