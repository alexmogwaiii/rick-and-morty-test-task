import React from 'react';
import PropTypes from 'prop-types';

export const EpisodesTable = ({ episodes }) => (
  <table className="episodes__table">
    <thead>
      <tr className="episodes__table-head-row">
        <th className="episodes__table-head-column">Id</th>
        <th className="episodes__table-head-column">Name</th>
        <th className="episodes__table-head-column">Air Date</th>
      </tr>
    </thead>
    <tbody>
      {episodes.map(episode => (
        <tr key={episode.id} className="episodes__table-row">
          <td className="episodes__table-column">
            {episode.id}
          </td>
          <td className="episodes__table-column">
            {episode.name}
          </td>
          <td className="episodes__table-column">
            {episode.air_date}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

EpisodesTable.propTypes = {
  episodes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    air_date: PropTypes.string.isRequired,
  })).isRequired,
};
