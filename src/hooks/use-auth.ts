import { useContext, useEffect } from 'react'
import { useLocalStorage } from './use-local-storage'
import { AuthContext } from '../context/auth-context'
import { User } from '../types/user'

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext)
  const { getItem, setItem } = useLocalStorage()

  useEffect(() => {
    // load user from local storage
    const user = getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addUser = (user: User) => {
    setUser(user)
    setItem('user', JSON.stringify(user))
  }

  const removeUser = () => {
    setUser(null)
    setItem('user', '')
  }

  const login = (user: User) => addUser(user)

  const logout = () => removeUser()

  return { user, login, logout, setUser }
}
