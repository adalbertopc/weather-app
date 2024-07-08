import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import { SearchInput } from './search-input'

describe('SearchInput', () => {
  const mockOnChange = vi.fn()

  it('should render the search input component properly', () => {
    render(<SearchInput onChange={mockOnChange} />)

    expect(screen.getByText("What's the weather like in...?")).toBeTruthy()
    expect(screen.getByPlaceholderText('City, State, Country')).toBeTruthy()
  })

  it('should call onChange handler with input value', () => {
    render(<SearchInput onChange={mockOnChange} />)

    const input = screen.getByPlaceholderText('City, State, Country')
    fireEvent.change(input, { target: { value: 'New York' } })

    expect(mockOnChange).toHaveBeenCalledWith('New York')
  })
})
