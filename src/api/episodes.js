import { request } from './api';

export const getEpisodes = async(page) => {
  const episodes = await request(`/episode/?page=${page}`);

  return episodes;
};
