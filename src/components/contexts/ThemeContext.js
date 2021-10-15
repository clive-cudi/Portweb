import React from 'react';
import { useState } from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(false)
    return (
        <ThemeContext.Provider value={[darkTheme, setDarkTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}