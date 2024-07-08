import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/auth-context'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>,
  },

  {
    path: '/sign-in',
    element: <div>Sign In</div>,
  },
])

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}
