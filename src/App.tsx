import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/auth-context'
import Root from './routes/root'
import SignIn from './routes/sign-in'
import { ProtectedRoute } from './components/protected-route'
import './main.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute children={<Root />} />,
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
