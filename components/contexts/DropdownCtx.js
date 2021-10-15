import React from "react";
import { useState } from "react";

export const DropdownContext = React.createContext();

export const DropdownProvider = ({children}) =>{
    const [dropdown, showDropdown] = useState(false);
    return (
        <DropdownContext.Provider value={[dropdown, showDropdown]}>
            {children}
        </DropdownContext.Provider>
    )
}