import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/auth-context'

import SignIn from './routes/sign-in'
import { ProtectedRoute } from './components/protected-route'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute children={<div>Home</div>} />,
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
