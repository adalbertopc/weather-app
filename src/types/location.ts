export interface Location {
  lat: number
  lon: number
  name: string
  region: string
  country: string
  tz_id: string
  localtime_epoch: number
  localtime: string
}

export interface AutoCompleteLocation
  extends Pick<Location, 'name' | 'region' | 'country'> {
  id: number
}
