import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { WeatherCard } from './weather-card'
import { Location } from '../../types/location'
import { Weather } from '../../types/weather'

// Mock data for the test
const location: Location = {
  name: 'Tokyo',
  region: 'Tokyo',
  country: 'Japan',
  lat: 35.69,
  lon: 139.69,
  tz_id: 'Asia/Tokyo',
  localtime_epoch: 1720464372,
  localtime: '2024-07-09 3:46',
}

const weather: Weather = {
  last_updated_epoch: 1720464300,
  last_updated: '2024-07-09 03:45',
  temp_c: 26.4,
  temp_f: 79.5,
  is_day: 0,
  condition: {
    text: 'Clear',
    icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
    code: 1000,
  },
  wind_mph: 2.5,
  wind_kph: 4.0,
  wind_degree: 130,
  wind_dir: 'SE',
  pressure_mb: 1004.0,
  pressure_in: 29.65,
  precip_mm: 0.0,
  precip_in: 0.0,
  humidity: 94,
  cloud: 0,
  feelslike_c: 28.0,
  feelslike_f: 82.5,
  windchill_c: 28.2,
  windchill_f: 82.8,
  heatindex_c: 30.8,
  heatindex_f: 87.4,
  dewpoint_c: 21.3,
  dewpoint_f: 70.3,
  vis_km: 8.0,
  vis_miles: 4.0,
  uv: 1.0,
  gust_mph: 2.6,
  gust_kph: 4.2,
}

describe('WeatherCard Component', () => {
  it('handles favorite button click', () => {
    const handleClick = vi.fn()
    render(
      <WeatherCard
        location={location}
        weather={weather}
        onClick={handleClick}
        isFavorite={false}
      />,
    )

    const button = screen.getByRole('button', { name: /Add to favorites/i })
    expect(button).toBeTruthy()
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('shows "Remove from favorites" when isFavorite is true', () => {
    render(
      <WeatherCard location={location} weather={weather} isFavorite={true} />,
    )

    const button = screen.getByRole('button', {
      name: /Remove from favorites/i,
    })
    expect(button).toBeTruthy()
  })

  it('shows "Add to favorites" when isFavorite is false', () => {
    render(
      <WeatherCard location={location} weather={weather} isFavorite={false} />,
    )
    expect(screen.queryByText('/Add to favorites/i')).toBeFalsy()
  })
})
