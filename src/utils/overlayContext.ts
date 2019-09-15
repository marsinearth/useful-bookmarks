import { createContext } from 'react'
import { toggleOverlay } from '../types'

export type contextProps = {
  isOverlay: boolean
  toggleOverlay: toggleOverlay
}

export const OverlayContext = createContext<contextProps>({
  isOverlay: false,
  toggleOverlay: () => {}
})

export const OverlayProvider = OverlayContext.Provider
