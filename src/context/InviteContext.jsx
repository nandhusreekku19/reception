import { createContext, useContext, useState } from 'react'

const InviteContext = createContext(null)

export function InviteProvider({ children }) {
  const [hasEntered, setHasEntered] = useState(false)
  return (
    <InviteContext.Provider value={{ hasEntered, setHasEntered }}>
      {children}
    </InviteContext.Provider>
  )
}

export function useInvite() {
  const ctx = useContext(InviteContext)
  if (!ctx) throw new Error('useInvite must be used within InviteProvider')
  return ctx
}
