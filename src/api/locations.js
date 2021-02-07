import { request } from './api';

export const getLocations = async(page) => {
  const locations = await request(`/location/?page=${page}`);

  return locations;
};
