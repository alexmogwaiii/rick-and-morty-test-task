import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PaginationItem from '@material-ui/lab/PaginationItem';
import LinearProgress from '@material-ui/core/LinearProgress';
import Pagination from '@material-ui/lab/Pagination';
import { getCharacters } from '../../../api/characters';
import { Character } from '../Character';
import { Filters } from '../FILTERS';

import './Characters.scss';

const useStyles = makeStyles({
  root: {
    color: '#97ce4c',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    boxShadow: '1px 1px 4px 97ce4c',
  },
});

export const Characters = () => {
  const classes = useStyles();
  const [characters, setCharacters] = useState(null);
  const [species, setSpeciesFilter] = useState('');
  const [status, setStatusFilter] = useState('');
  const [gender, setGenderFilter] = useState('');
  const [haveErrors, setError] = useState(false);

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
      <LinearProgress color="primary" />
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
        <Pagination
          count={countOfPages}
          shape="round"
          size="large"
          variant="text"
          page={page}
          color="primary"
          onChange={handlePagination}
          renderItem={(item => (
            <PaginationItem
              {...item}
              className={classes.root}
            />
          ))}
        />
      </div>

      {haveErrors
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
