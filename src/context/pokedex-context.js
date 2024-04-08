import React, { createContext } from "react";

export const ContextPokedex = createContext(null);

export function PokedexContextProvider(props) {
    return (
        <ContextPokedex.Provider {...props}/>
    );
}