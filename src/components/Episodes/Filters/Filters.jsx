import React, { useState, useEffect, useCallback } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

export const Filters = React.memo(({ hasError, setFilterQuery }) => {
  const [nameQuery, setName] = useState('');

  const updateQuery = () => {
    setFilterQuery(nameQuery);
  };

  const delayedQuery = useCallback(
    debounce(updateQuery, 500), [nameQuery],
  );

  const handleChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    delayedQuery();

    return delayedQuery.cancel;
  }, [nameQuery]);

  return (
    <>
      <label
        htmlFor="episodes_name"
        className="episodes__label"
      >
        Name
      </label>
      <input
        className={classnames({
          episodes__input: true,
          'episodes__input--error': hasError,
        })}
        type="text"
        placeholder="Enter name here"
        value={nameQuery}
        name="name"
        onChange={handleChange}
        id="episodes_name"
      />
    </>
  );
});

Filters.propTypes = {
  setFilterQuery: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
};
