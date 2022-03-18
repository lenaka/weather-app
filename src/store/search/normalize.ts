import { Cities, CitiesRes } from '../../types/city';

export const normalizeCitiesData = (data: CitiesRes): Cities => {
  return data.map(city => {
    return {
      name: city.name,
      lat: city.lat,
      lon: city.lon,
      country: city.country,
      state: city.state,
      id: `${city.name},${city.country}${city.state ? `,${city.state}` : ''}`
    };
  });
};
