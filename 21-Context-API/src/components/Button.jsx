import React, { useContext } from 'react'
import { ThemedDataContext } from '../context/ThemeContext'

const Button = () => {
const [theme,setTheme]=useContext(ThemedDataContext)
    const changeTheme=()=>{
       setTheme('Dark')
    }

        const reloadPage=()=>{
        window.location.reload()
    }

  return (
    <div className='button'>
        <button className='bt'
        onClick={changeTheme}
        >Change Theme</button>

        <button className='reload'
        onClick={reloadPage}
        >
            Reload
        </button>
    </div>
  )
}

export default Button