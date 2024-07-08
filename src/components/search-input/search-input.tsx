import React from 'react'
import { Input, Typography } from 'antd'

interface SearchInputProps {
  onChange: (value: string) => void
}

export const SearchInput: React.FC<SearchInputProps> = ({ onChange }) => {
  return (
    <div className="search-form-container">
      <Typography.Title level={3}>
        What's the weather like in...?
      </Typography.Title>
      <Input
        name="q"
        type="text"
        size="large"
        placeholder="City, State, Country"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
