/**
 * This file simulates a backend API endpoint.
 * I will use this to test the frontend.
 */

import { mockRequest } from './utils/mock-request'
import { User } from './types/user'
import fakeUsers from '../fake-users.json'

export const signIn = async (username: string, password: string) => {
  const res = await mockRequest<User[]>(fakeUsers)
  const data: User[] = await res.json()

  if (!data)
    return {
      error: 'Invalid data',
    }

  const user = findUser(data, username)

  if (!user) return { error: 'Invalid username' }
  if (user.password !== password) {
    return { error: 'Invalid password' }
  }

  return {
    user: {
      id: user.id,
      name: user.name,
      username: user.username,
    },
  }
}

export const findUser = (data: User[], username: string) => {
  return data.find((user) => user.username === username)
}
