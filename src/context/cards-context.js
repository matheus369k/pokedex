import React, { createContext } from "react";

export const ContextCards = createContext(null);

export function CardsContextProvider(props) {
    return (
        <ContextCards.Provider {...props}/>
    );
}