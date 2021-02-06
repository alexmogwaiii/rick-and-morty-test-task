import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme,
  makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import './character.scss';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: yellow,
  },
});

export const Character = ({ character }) => {
  const [isModalOpen, setModal] = useState(false);

  const handleClose = () => {
    setModal(false);
  };

  const handleOpen = () => {
    setModal(true);
  };

  const classes = useStyles();

  return (
    <li className="character">
      <img
        src={character.image}
        alt="character from Rick and Morty"
        className="character__image"
      />

      <h3 className="character__name">
        {character.name}
      </h3>

      <p className="character__species">
        {character.species}
      </p>

      <p className="character__status">
        {character.status === 'Dead'
          ? <FontAwesomeIcon icon={faCircle} color="red" />
          : <FontAwesomeIcon icon={faCircle} color="lime" />
        }
      </p>

      <ThemeProvider theme={theme}>
        <Button
          color="primary"
          onClick={handleOpen}
          variant="contained"
          className={classes.margin}
        >
          More Info
        </Button>
      </ThemeProvider>

      <Dialog
        fullWidth
        maxWidth="xs"
        title="test dialog title"
        open={isModalOpen}
        onClose={handleClose}
        transitionDuration={1000}
      >
        <div className="character__info">
          <ul className="character__info-list">
            <li className="character__info-item">
              Name:
              {` ${character.name}`}
            </li>
            <li className="character__info-item">
              Gender:
              {` ${character.gender}`}
            </li>
            <li className="character__info-item">
              Location:
              {` ${character.location.name}`}
            </li>
            <li className="character__info-item">
              Species:
              {` ${character.species}`}
            </li>
            <li className="character__info-item">
              Status:
              {` ${character.status}`}
            </li>
          </ul>
        </div>
      </Dialog>
    </li>
  );
};

Character.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    location: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
