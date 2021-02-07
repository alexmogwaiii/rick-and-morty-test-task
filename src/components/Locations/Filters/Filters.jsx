import React from 'react';
import PropTypes from 'prop-types';

export const Filters = React.memo(({
  setName,
  setType,
  setDimension,
  nameQuery,
  typeQuery,
  dimensionQuery,
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'type':
        setType(value);
        break;
      case 'dimension':
        setDimension(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="locations__filters">
      <div className="locations__filter-item">
        <label
          htmlFor="name"
          className="locations__label"
        >
          Name
        </label>
        <input
          className="locations__input"
          type="text"
          placeholder="Enter name here"
          value={nameQuery}
          name="name"
          onChange={handleChange}
          id="name"
        />
      </div>

      <div className="locations__filter-item">
        <label
          htmlFor="type"
          className="locations__label"
        >
          Type
        </label>
        <input
          className="locations__input"
          type="text"
          placeholder="Enter type here"
          value={typeQuery}
          name="type"
          onChange={handleChange}
          id="type"
        />
      </div>

      <div className="locations__filter-item">
        <label
          htmlFor="dimension"
          className="locations__label"
        >
          Dimension
        </label>
        <input
          className="locations__input"
          type="text"
          placeholder="Enter dimension here"
          value={dimensionQuery}
          name="dimension"
          onChange={handleChange}
          id="dimension"
        />
      </div>
    </div>
  );
});

Filters.propTypes = {
  setName: PropTypes.func.isRequired,
  setType: PropTypes.func.isRequired,
  setDimension: PropTypes.func.isRequired,
  nameQuery: PropTypes.string.isRequired,
  typeQuery: PropTypes.string.isRequired,
  dimensionQuery: PropTypes.string.isRequired,
};
