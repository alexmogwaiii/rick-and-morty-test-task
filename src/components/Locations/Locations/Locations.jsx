import React, { useState, useEffect, useCallback, useRef } from 'react';
import debounce from 'lodash.debounce';
import { getLocations } from '../../../api/locations';
import { Loader } from '../../UI/Loader';
import { PaginationUi } from '../../UI/Pagination';
import { LocationsTable } from '../LocationsTable';
import { Filters } from '../Filters';

import './Locations.scss';

export const Locations = () => {
  const isInitialMount = useRef(true);
  const [locations, setLocations] = useState(null);
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [dimension, setDimension] = useState('');

  const loadLocations = async() => {
    try {
      const query = `&name=${name}&type=${type}&dimension=${dimension}`;
      const locationsFromServer = await getLocations(page + query);

      setLocations(locationsFromServer);
    } catch (error) {
      setPage(1);
    }
  };

  const delayedRequest = useCallback(debounce(
    loadLocations, 600,
  ), [name, type, dimension]);

  const handlePagination = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    loadLocations();
  }, [page]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      delayedRequest();

      return delayedRequest.cancel;
    }

    return null;
  }, [name, type, dimension]);

  if (!locations) {
    return (
      <Loader />
    );
  }

  const countOfPages = locations.info.pages;

  return (
    <article className="locations">
      <h2 className="locations__title">Locations</h2>

      <Filters
        nameQuery={name}
        typeQuery={type}
        dimensionQuery={dimension}
        setName={setName}
        setType={setType}
        setDimension={setDimension}
      />

      <div className="locations__pagination">
        <PaginationUi
          countOfPages={countOfPages}
          handlePagination={handlePagination}
          page={page}
        />
      </div>

      <LocationsTable locations={locations.results} />
    </article>
  );
};
