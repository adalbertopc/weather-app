import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/auth-context'

import SignIn from './routes/sign-in'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>,
  },

  {
    path: '/sign-in',
    element: <SignIn />,
  },
])

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}
