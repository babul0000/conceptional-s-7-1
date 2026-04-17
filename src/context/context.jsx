
"use client";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const InstallAppContext = ({children}) => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch("/data.json")
        .then((res) => res.json())
        .then(data => setItem(data))
        // .catch((err) => console.error("Error loading data:", err));
}, []);
    
    return (
        <AppContext.Provider value={{item, setItem}}>
{children}
        </AppContext.Provider>
    );
};

export default InstallAppContext;