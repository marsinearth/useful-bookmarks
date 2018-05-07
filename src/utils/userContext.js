import React, { createContext } from 'react'
const UserContext = createContext({
  id: null,
  name: null
})
export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer
