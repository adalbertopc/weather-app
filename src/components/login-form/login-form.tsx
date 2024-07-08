import React from 'react'
import { Button, Form, Input } from 'antd'

interface LoginFormProps {
  onSubmit: (state: Record<string, string>) => void
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  return (
    <Form layout="vertical" onFinish={onSubmit} className="login-form">
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please write your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please write your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
