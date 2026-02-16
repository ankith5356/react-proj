import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemedDataContext } from '../context/ThemeContext'


const Navbar = () => {
    const [theme,setTheme] = useContext(ThemedDataContext)
  return (
    <div className={theme}>
        <h1>Logo</h1>
        <Nav2/>
    </div>
  )
}

export default Navbar