import React from 'react';
import PropTypes from 'prop-types';

export const LocationsTable = ({ locations }) => (
  <table className="locations__table">
    <thead>
      <tr className="locations__table-head-row">
        <th className="locations__table-head-column">
          Name
        </th>
        <th className="locations__table-head-column">
          Type
        </th>
        <th className="locations__table-head-column">
          Dimension
        </th>
      </tr>
    </thead>

    <tbody>
      {locations.map(location => (
        <tr key={location.id} className="locations__table-row">
          <td className="locations__table-column">
            {location.name}
          </td>
          <td className="locations__table-column">
            {location.type}
          </td>
          <td className="locations__table-column">
            {location.dimension}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

LocationsTable.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    dimension: PropTypes.string.isRequired,
  })).isRequired,
};
