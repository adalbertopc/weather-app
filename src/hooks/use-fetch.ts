import { useState } from 'react'

export const useFetch = <T>({
  url,
  options,
}: {
  url: string
  options?: RequestInit | undefined
}): [
  {
    data: T | null
    error: Error | null
    isLoading: boolean
  },
  () => void,
] => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchData = async (): Promise<void> => {
    setIsLoading(true)
    try {
      const res = await fetch(url, options)
      if (!res.ok) {
        throw res
      }
      const response = await res.json()

      setData(response)
      setIsLoading(false)
    } catch (error) {
      setError(error as Error)
    }
  }

  return [{ data, error, isLoading }, fetchData]
}
