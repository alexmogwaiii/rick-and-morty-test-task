import React, { useState, useEffect } from 'react';
import { PaginationUi } from '../../UI/Pagination';
import { getCharacters } from '../../../api/characters';
import { Character } from '../Character';
import { Filters } from '../Filters';
import { Loader } from '../../UI/Loader';

import './Characters.scss';

export const Characters = () => {
  const [characters, setCharacters] = useState(null);
  const [species, setSpeciesFilter] = useState('');
  const [status, setStatusFilter] = useState('');
  const [gender, setGenderFilter] = useState('');
  const [hasError, setError] = useState(false);
  const [page, setPage] = useState(1);

  const loadCharacters = async() => {
    let queries = '';

    if (species || status || gender) {
      queries = `&species=${species}&status=${status}&gender=${gender}`;
    }

    try {
      const charactersFromServer = await getCharacters(page + queries);

      setError(false);
      setCharacters(charactersFromServer);
    } catch (error) {
      setError(true);
      setPage(1);
    }
  };

  const handlePagination = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    loadCharacters();
  }, [page, species, status, gender]);

  if (!characters) {
    return (
      <Loader />
    );
  }

  const countOfPages = characters.info.pages;

  return (
    <article className="characters">
      <h2 className="characters__title">
        CHARACTERS
      </h2>

      <Filters
        species={species}
        status={status}
        gender={gender}
        setSpecies={setSpeciesFilter}
        setStatus={setStatusFilter}
        setGender={setGenderFilter}
      />

      <div className="characters__pagination">
        <PaginationUi
          countOfPages={countOfPages}
          handlePagination={handlePagination}
          page={page}
        />
      </div>

      {hasError
        ? (
          <div>
            Connot find characters
          </div>
        ) : (
          <ul className="characters__list">
            {characters.results.map(character => (
              <Character key={character.id} character={character} />
            ))}
          </ul>
        )}

    </article>
  );
};
