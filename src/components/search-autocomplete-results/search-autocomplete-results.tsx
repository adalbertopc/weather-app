import React from 'react'
import { Card, Typography } from 'antd'
import { AutoCompleteLocation } from '../../types/location'

interface SearchAutocompleteResultsProps {
  results?: AutoCompleteLocation[]
  onClick: (id: number) => void
}

export const SearchAutocompleteResults: React.FC<
  SearchAutocompleteResultsProps
> = ({ results, onClick }) => {
  return (
    <Card title="Search Results" size="small" className="autocomplete-results">
      {results?.length === 0 ? (
        <Typography.Text>No results found</Typography.Text>
      ) : (
        results?.map((result) => (
          <div
            key={result.id}
            onClick={() => onClick(result.id)}
            className="autocomplete-result red-2"
          >
            {result.name}, {result.region}, {result.country}
          </div>
        ))
      )}
    </Card>
  )
}
