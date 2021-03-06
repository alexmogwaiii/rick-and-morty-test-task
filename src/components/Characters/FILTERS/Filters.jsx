import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  select: {
    '& ul': {
      color: 'brown',
      width: '125px',
      cursor: 'pointer',
    },
    '& li': {
      fontSize: '1.5rem',
      width: '125px',
      overflow: 'visible',
    },
  },
  label: {
    color: 'brown',
    fontSize: '1.6rem',
    left: '-5px',
  },
  control: {
    backgroundColor: '#fae48bff',
    width: '125px',
  },
});

export const Filters = ({
  species,
  status,
  gender,
  setSpecies,
  setStatus,
  setGender,
}) => {
  const classes = useStyles();
  const handleSpecies = (event) => {
    setSpecies(event.target.value);
  };

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="characters__filters">
      <FormControl
        className={classes.control}
        variant="filled"
      >
        <InputLabel
          id="species"
          className={classes.label}
        >
          Species
        </InputLabel>
        <Select
          labelId="species"
          value={species}
          id="species-select"
          onChange={handleSpecies}
          MenuProps={{ classes: { paper: classes.select } }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="animal">Animal</MenuItem>
          <MenuItem value="robot">Robot</MenuItem>
          <MenuItem value="humanoid">Humanoid</MenuItem>
          <MenuItem value="human">Human</MenuItem>
          <MenuItem value="cronenberg">Cronenberg</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
          <MenuItem value="disease">Disease</MenuItem>
          <MenuItem value="poopybutthole">Poopybutthole</MenuItem>
          <MenuItem value="alien">Alien</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        className={classes.control}
        variant="filled"
      >
        <InputLabel
          id="status"
          className={classes.label}
        >
          Status
        </InputLabel>
        <Select
          labelId="status"
          value={status}
          id="status-select"
          onChange={handleStatus}
          MenuProps={{ classes: { paper: classes.select } }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="dead">Dead</MenuItem>
          <MenuItem value="alive">Alive</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        className={classes.control}
        variant="filled"
      >
        <InputLabel
          id="gender"
          className={classes.label}
        >
          Gender
        </InputLabel>
        <Select
          labelId="gender"
          value={gender}
          id="gender-select"
          onChange={handleGender}
          MenuProps={{ classes: { paper: classes.select } }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
          <MenuItem value="genderless">Genderless</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

Filters.propTypes = {
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  setSpecies: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  setGender: PropTypes.func.isRequired,
};
