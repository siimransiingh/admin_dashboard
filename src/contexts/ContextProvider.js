import React, { createContext, useContext, useState } from 'react'
const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setactiveMenu] = useState(true);
    const [isClicked, setisClicked] = useState(initialState)
    const [screenSize, setscreenSize] = useState(undefined)
    const [curretColor, setcurretColor] = useState('#03C9D7')
    const [curretMode, setcurretMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)
    const [cartClose, setcartClose] = useState(false)
    
    const setMode = (e) => {
        setcurretMode(e.target.value)

        localStorage.setItem('themeMode' , e.target.value);
        setThemeSettings(false);
    }

    const setColor = (color) => {
        setcurretColor(color)

        localStorage.setItem('colorMode' , color);
        setThemeSettings(false);
    }

    const handleClick = (clicked) => {
        setisClicked({ ...initialState,[clicked]:true});
    }

    return (
        <StateContext.Provider
            value={{ activeMenu, 
            setactiveMenu,
            isClicked,
            setisClicked,
            handleClick,
            screenSize,
            setscreenSize,
            curretColor,curretMode
            ,setcurretColor,setcurretMode,
            themeSettings, setThemeSettings,
            setColor,setMode,cartClose, setcartClose
            }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext =  () => useContext(StateContext)