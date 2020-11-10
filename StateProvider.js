import React, { createContext, useContext, useReducer } from "react";

// Preparing Data Layer
export const StateContext = createContext(); // Preparing Data Layer

// Wraps the and lets you access the data layer
export const StateProvider = ({reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);