import React, { createContext, useContext, useReducer } from 'react'

// preparing the data layer - creating context which is // where the data layer lives
export const StateContext = createContext()

// stateProvider is the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

// This allows us to pull data from the data layer
export const useStateValue = () => useContext(StateContext)
