import React, { useState } from 'react'
import context from './MyContext'

function State(props) {
    const [mode, setMode] = useState('light')

    const toggleMode = () => {
        if(mode == 'light'){
            setMode('dark')
            document.body.style.backgroundColor = rgb(17,24,39)
        }else{
            setMode('light')
            document.body.style.backgroundColor = "white"
        }
    }
  return (
    <context.Provider value={{mode, toggleMode}}>
      {props.children}
    </context.Provider>
  )
}

export default State
