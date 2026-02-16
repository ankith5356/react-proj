import React, { createContext, useContext, useState } from 'react'

export const ThemedDataContext = createContext()

const ThemeContext = (props) => {
    const [theme, setTheme] = useState('Light')
  return (
    <div>
        <ThemedDataContext.Provider value={[theme,setTheme]} >
            {props.children}
        </ThemedDataContext.Provider>
    </div>
  )
}

export default ThemeContext