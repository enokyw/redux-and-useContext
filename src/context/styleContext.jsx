import { createContext, useContext, useEffect, useState } from "react";
import style from "../../settings/style.config.json"


const StyleContext = createContext();

export const useStyle = () => useContext(StyleContext);

export function StyleProvider ({children}) {
    const [styleMode, setStyleMode] = useState(style.light_mode);
    const [darkMode, setDarkMode] = useState(false); // BOOLEAN DATA

    useEffect(() => {
        const styleMode = darkMode? style.dark_mode: style.light_mode;
        setStyleMode(styleMode);
    },[darkMode])
    
    return (
        <StyleContext.Provider 
            value={{
                styleMode,
                darkMode,
                setDarkMode
            }} >
            {children}
        </StyleContext.Provider>
    )
}