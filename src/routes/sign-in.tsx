import { Navigate } from 'react-router-dom'
import { Typography } from 'antd'
import { LoginForm } from '../components/login-form'
import { useAuth } from '../hooks/use-auth'
import { signIn } from '../api'

export const SignIn: React.FC = () => {
  const { user, login } = useAuth()

  if (user) return <Navigate to="/" />

  const handleSubmit = async (data: Record<string, string>) => {
    const res = await signIn(data.username, data.password)

    if (res.user) login(res?.user)
  }

  return (
    <div className="sign-in-page">
      <Typography.Title className="title">Sign In</Typography.Title>
      <Typography.Paragraph className="subtitle">
        Please sign in with your username and password.
      </Typography.Paragraph>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  )
}

export default SignIn
