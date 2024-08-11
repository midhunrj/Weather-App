import React,{createContext,useState,useContext,ReactNode}from 'react'

interface ThemeCOntextProps{
    theme:string;
    toggleTheme:()=>void
}

const ThemeContext=createContext<ThemeCOntextProps|undefined>(undefined)


export const useTheme=()=>{
    const context=useContext(ThemeContext)
    if(!context)
    {
        throw new Error('useTheme must be used within a Theme provider')
    }
    return context
}

export const ThemeProvider=({children}:{children:ReactNode})=>{
    const [theme,setTheme]=useState('default')

    const toggleTheme=()=>{
        setTheme((prevTheme)=>
            (prevTheme==='default'?'black':'default')
        )
    }

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}