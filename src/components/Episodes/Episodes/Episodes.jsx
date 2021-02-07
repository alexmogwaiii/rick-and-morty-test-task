import React, { useState, useEffect } from 'react';
import { PaginationUi } from '../../UI/Pagination';
import { getEpisodes } from '../../../api/episodes';
import { Loader } from '../../UI/Loader';
import { EpisodesTable } from '../EpisodesTable';
import { Filters } from '../Filters';

import './Episodes.scss';

export const Episodes = () => {
  const [episodes, setEpisodes] = useState(null);
  const [hasError, setErrorStatus] = useState(false);
  const [page, setPage] = useState(1);
  const [filterQuery, setFilterQuery] = useState('');

  const loadEpisodes = async() => {
    try {
      const query = `${page}&name=${filterQuery}`;

      const episodesFromServer = await getEpisodes(query);

      setErrorStatus(false);
      setEpisodes(episodesFromServer);
    } catch (error) {
      setErrorStatus(true);
    }
  };

  const handlePagination = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    loadEpisodes();
  }, [page, filterQuery]);

  if (!episodes) {
    return (
      <Loader />
    );
  }

  const countOfPages = episodes.info.pages;

  return (
    <article className="episodes">
      <h2 className="episodes__title">Episodes</h2>

      <div className="episodes__filters">
        <Filters
          setFilterQuery={setFilterQuery}
          hasError={hasError}
        />
        {hasError
        && (
          <div className="episodes__error">
            Cannot find episodes
          </div>
        )}
      </div>

      <div className="episodes__pagination">
        <PaginationUi
          countOfPages={countOfPages}
          handlePagination={handlePagination}
          page={page}
        />
      </div>

      <EpisodesTable episodes={episodes.results} />
    </article>
  );
};
