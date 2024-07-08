import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import { LoginForm } from './login-form'

describe('LoginForm', () => {
  it('should render the form properly', () => {
    render(<LoginForm onSubmit={vi.fn()} />)

    expect(screen.getByLabelText('Username')).toBeTruthy()
    expect(screen.getByLabelText('Password')).toBeTruthy()
    expect(screen.getByRole('button', { name: /submit/i })).toBeTruthy()
  })

  it('should show validation errors when fields are empty', async () => {
    render(<LoginForm onSubmit={vi.fn()} />)

    fireEvent.click(screen.getByRole('button', { name: /submit/i }))

    expect(await screen.findByText('Please write your username!')).toBeTruthy()
    expect(await screen.findByText('Please write your password!')).toBeTruthy()
  })

  it('should call onSubmit with form data when form is filled out', async () => {
    const mockSubmit = vi.fn()
    render(<LoginForm onSubmit={mockSubmit} />)

    fireEvent.change(screen.getByLabelText('Username'), {
      target: { value: 'adal.dev' },
    })
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: '123' },
    })

    fireEvent.click(screen.getByRole('button', { name: /submit/i }))

    await screen.findByRole('button', { name: /submit/i }) // Wait for the form submission to complete

    expect(mockSubmit).toHaveBeenCalledWith({
      username: 'adal.dev',
      password: '123',
    })
  })
})
