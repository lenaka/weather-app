export interface CityRes {
  name: string,
  local_names: {
    [key: string]: string,
  }[],
  lat: number,
  lon: number,
  country: string,
  state?: string,
}

export type CitiesRes = CityRes[];

export type City = Pick<CityRes, 'name' | 'lat' | 'lon' | 'country' | 'state'> & {
  id: string,
};

export type Coords = Pick<City, 'lat' | 'lon'>;

export type Cities = City[];
