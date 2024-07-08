import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { SearchAutocompleteResults } from './search-autocomplete-results'

const mockResults = [
  { id: 1, name: 'City A', region: 'Region A', country: 'Country A' },
  { id: 2, name: 'City B', region: 'Region B', country: 'Country B' },
]
describe('SearchAutocompleteResults', () => {
  const mockOnClick = vi.fn()

  it('should render "No results found" message when results are empty', () => {
    render(<SearchAutocompleteResults results={[]} onClick={mockOnClick} />)

    expect(screen.getByText('No results found')).toBeTruthy()
  })

  it('should render search results correctly', () => {
    render(
      <SearchAutocompleteResults results={mockResults} onClick={mockOnClick} />,
    )

    mockResults.forEach((result) => {
      expect(
        screen.getByText(`${result.name}, ${result.region}, ${result.country}`),
      ).toBeTruthy()
    })
  })

  it('should call onClick handler when a result is clicked', () => {
    render(
      <SearchAutocompleteResults results={mockResults} onClick={mockOnClick} />,
    )

    fireEvent.click(screen.getByText('City A, Region A, Country A'))

    expect(mockOnClick).toHaveBeenCalledWith(1)
  })
})
