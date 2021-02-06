const BASE_URL = 'https://rickandmortyapi.com/api';

export const request = async(resource) => {
  try {
    const response = await fetch(`${BASE_URL}${resource}`);

    if (!response.ok) {
      throw new Error(`
        ${response.status} - ${response.statusText}
      `);
    }

    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};
