import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button, Flex, Typography } from 'antd'
import { useFetch } from '../hooks/use-fetch'
import { SearchInput } from '../components/search-input'
import { useAuth } from '../hooks/use-auth'
import { SearchAutocompleteResults } from '../components/search-autocomplete-results'
import { AutoCompleteLocation, Location } from '../types/location'
import { WeatherCard } from '../components/weather-card'
import { Weather } from '../types/weather'
import { Spinner } from '../components/spinner'

export const Root: React.FC = () => {
  const { user, logout } = useAuth()
  const [currentCity, setCurrentCity] = useState<number>()
  const [selectedCities, setSelectedCities] = useState<
    {
      location: Location
      weather: Weather
    }[]
  >([])
  const [searchParams, setSearchParams] = useSearchParams()

  // Fetchers
  const [{ data: searchData }, getCities] = useFetch<AutoCompleteLocation[]>({
    url: `${import.meta.env.VITE_API_BASE_URL}/search.json?key=${
      import.meta.env.VITE_API_KEY
    }&${searchParams.toString()}`,
  })

  const [
    { data: currentCityData, isLoading: currentCityIsLoading },
    getWeather,
  ] = useFetch<{
    location: Location
    current: Weather
  }>({
    url: `${import.meta.env.VITE_API_BASE_URL}/current.json?key=${
      import.meta.env.VITE_API_KEY
    }&q=id:${currentCity}`,
  })

  useEffect(() => {
    if (searchParams.get('q')) {
      handleSearchSubmit(searchParams.get('q') as string)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  useEffect(() => {
    if (currentCity) {
      getWeather()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCity])

  const handleSearchSubmit = (value: string) => {
    if (value.length < 3) {
      setSearchParams(new URLSearchParams())
      return
    }
    const params = new URLSearchParams(searchParams)
    params.set('q', value)
    setSearchParams(params)
    getCities()
  }

  const handleCurrentCitySelect = (city: number) => {
    setCurrentCity(city)
    setSearchParams(new URLSearchParams())
  }

  const handleAddToFavorites = (location: Location, weather: Weather) => {
    if (
      selectedCities.some((city) => {
        return city.location.name === location.name
      })
    )
      return

    setSelectedCities([...selectedCities, { location, weather }])
  }
  const handleRemoveFromFavorites = (location: Location) => {
    setSelectedCities(
      selectedCities.filter((city) => city.location.name !== location.name),
    )
  }

  return (
    <div className="container">
      <Flex justify="space-between" align="center">
        <Typography.Title className="hello-user">
          Hello {user?.name}!
        </Typography.Title>
        <Button type="primary" danger onClick={logout}>
          Sign out
        </Button>
      </Flex>
      <SearchInput onChange={(value) => handleSearchSubmit(value)} />
      {searchParams.get('q') && (
        <SearchAutocompleteResults
          results={searchData?.map((result) => ({
            id: result.id,
            country: result.country,
            name: result.name,
            region: result.region,
          }))}
          onClick={handleCurrentCitySelect}
        />
      )}
      {currentCityData?.current &&
        currentCityData?.location &&
        !currentCityIsLoading && (
          <WeatherCard
            location={currentCityData?.location}
            weather={currentCityData?.current}
            onClick={() =>
              handleAddToFavorites(
                currentCityData?.location,
                currentCityData?.current,
              )
            }
          />
        )}
      {currentCityIsLoading && (
        <Flex justify="center" align="center" className="loading-current-city">
          <Spinner />
        </Flex>
      )}

      {selectedCities.length > 0 && (
        <Typography.Title className="favorite-city-title" level={2}>
          Favorites Cities
        </Typography.Title>
      )}
      <div className="selected-cities">
        {selectedCities.map(({ location, weather }) => (
          <WeatherCard
            key={location.name}
            location={location}
            weather={weather}
            onClick={() => handleRemoveFromFavorites(location)}
            isFavorite
          />
        ))}
      </div>
    </div>
  )
}

export default Root
