import React, { useState } from 'react';

const ThemeContext = React.createContext()
const ThemeProvider = (props) =>{
     const [theme, setTheme] = useState('light')
    return (
        <React.Fragment>
            <ThemeContext.Provider value={{theme, setTheme}}>
                {props.children}
            </ThemeContext.Provider>
        </React.Fragment>
    )
}
export {ThemeProvider,ThemeContext}
