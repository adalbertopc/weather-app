import { createContext, useState } from 'react'
import { User } from '../types/user'

interface AuthContext {
  user: User | null
  setUser: (user: User | null) => void
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  setUser: () => {},
})

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
