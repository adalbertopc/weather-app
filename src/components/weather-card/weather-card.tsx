import React from 'react'
import { Button, Flex, Typography } from 'antd'
import { Location } from '../../types/location'
import { Weather } from '../../types/weather'

interface WeatherCardProps {
  location: Location
  weather: Weather
  isFavorite?: boolean
  onClick?: () => void
}

export const WeatherCard: React.FC<WeatherCardProps> = ({
  location,
  weather,
  onClick,
  isFavorite,
}) => {
  const icon = `https://${weather.condition.icon.slice(2)}`
  return (
    <Flex vertical justify="center" align="center">
      <Flex gap={32}>
        <Flex vertical justify="center">
          <Typography.Text className="main_temperature_title">
            {location.name}
          </Typography.Text>
          <div className="main_temperature_location">
            <Typography.Text
              type="secondary"
              className="main_temperature_country"
            >
              {location.country}
            </Typography.Text>
            <Typography.Text type="secondary">
              {location.region}
            </Typography.Text>
          </div>
        </Flex>
        <Flex vertical justify="center">
          <Flex gap={0}>
            <div>
              <img src={icon} alt={weather.condition.text} />
            </div>
            <Typography.Text className="main_temperature_c">
              {weather.temp_c}°C
            </Typography.Text>
          </Flex>
          <Typography.Text className="feels_like" type="secondary">
            Feels like: {weather.feelslike_c}°C
          </Typography.Text>
        </Flex>
      </Flex>
      <Flex vertical justify="center">
        <Flex align="center" gap={20} style={{ marginTop: '1rem' }}>
          <Typography.Paragraph type="secondary">
            Humidity: {weather.humidity}%
          </Typography.Paragraph>
          <Typography.Paragraph type="secondary">
            Wind: {weather.wind_mph} mph
          </Typography.Paragraph>
          <Typography.Paragraph type="secondary">
            Wind direction: {weather.wind_dir}
          </Typography.Paragraph>
        </Flex>
      </Flex>
      <Button
        type="primary"
        onClick={onClick}
        className="add-to-favorites"
        danger={isFavorite}
      >
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </Button>
    </Flex>
  )
}
