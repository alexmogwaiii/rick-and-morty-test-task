import React from 'react';
import PropTypes from 'prop-types';
import { green } from '@material-ui/core/colors';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const useStyles = makeStyles({
  label: {
    '& .MuiFormControlLabel-label': {
      fontSize: '1.4rem',
      marginLeft: '50px',
      fontWeight: 'bolde',
    },
  },
});

export const WatchListItem = React.memo(({ todo, setWatchList }) => {
  const classes = useStyles();

  const toggleCheckbox = (todoId) => {
    setWatchList(prevList => prevList.map((prevTodo) => {
      if (prevTodo.id === todoId) {
        const changedTodo = {
          ...prevTodo,
          status: !prevTodo.status,
        };

        localStorage.setItem(todoId, JSON.stringify(changedTodo));

        return changedTodo;
      }

      return prevTodo;
    }));
  };

  const deleteTodo = (todoId) => {
    setWatchList(prevList => prevList.filter((prevTodo) => {
      if (prevTodo.id === todoId) {
        return false;
      }

      return true;
    }));

    localStorage.removeItem(todoId);
  };

  return (
    <li key={todo.id} className="watch-list__todo">
      <FormControlLabel
        control={(
          <GreenCheckbox
            checked={todo.status}
            onChange={() => {
              toggleCheckbox(todo.id);
            }}
          />
        )}
        label={todo.name}
        className={classes.label}
      />
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        Delete
      </Button>
    </li>
  );
});

WatchListItem.propTypes = {
  todo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  }).isRequired,
  setWatchList: PropTypes.func.isRequired,
};
