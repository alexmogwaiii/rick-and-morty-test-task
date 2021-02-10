import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { WatchListItem } from '../WatchListItem';

import './WatchList.scss';

const useStyles = makeStyles({
  button: {
    height: '36px',
    marginLeft: '10px',
  },
});

export const WatchList = () => {
  const classes = useStyles();
  const [watchList, setWatchList] = useState([]);
  const [query, setQuery] = useState('');
  const [hasEmptyField, setFieldStatus] = useState(false);

  const handleChange = (event) => {
    setFieldStatus(false);
    setQuery(event.target.value);
  };

  const loadTodoListFromLC = () => {
    const todos = [];
    const keys = Object.keys(localStorage);

    for (const key of keys) {
      todos.push(JSON.parse(localStorage.getItem(key)));
    }

    return todos;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!query) {
      setFieldStatus(true);

      return;
    }

    const newTodo = {
      name: query,
      status: false,
      id: new Date().toLocaleString(),
    };

    localStorage.setItem(newTodo.id, JSON.stringify(newTodo));

    setWatchList(prevList => (
      [...prevList,
        newTodo]
    ));

    setQuery('');
  };

  useEffect(() => {
    setWatchList(loadTodoListFromLC());
  }, []);

  return (
    <article className="watch-list">
      <h2 className="watch-list__title">My Watch List</h2>

      <form
        className="watch-list__form"
        onSubmit={handleSubmit}
      >
        <input
          value={query}
          placeholder="Enter episode name here"
          name="watch-list-input"
          onChange={handleChange}
          className={classnames({
            'watch-list__input': true,
            'watch-list__input--error': hasEmptyField,
          })}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Add
        </Button>

        {hasEmptyField
          && (
            <span className="watch-list__empty-field">
              The field must be filled in
            </span>
          )}
      </form>

      {watchList.length > 0
        && (
          <ul className="watch-list__todos">
            {watchList.map(todo => (
              <WatchListItem
                key={todo.id}
                todo={todo}
                setWatchList={setWatchList}
              />
            ))}
          </ul>
        )}
    </article>
  );
};
