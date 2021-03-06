import { createContext } from 'react'

export type contextProps = {
  id: string | null
  name: string | null
}

export const UserContext = createContext<contextProps>({
  id: null,
  name: null
})
export const UserProvider = UserContext.Provider
