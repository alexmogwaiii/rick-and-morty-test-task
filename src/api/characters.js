import { request } from './api';

export const getCharacters = async(page) => {
  const characters = await request(`/character/?page=${page}`);

  return characters;
};
