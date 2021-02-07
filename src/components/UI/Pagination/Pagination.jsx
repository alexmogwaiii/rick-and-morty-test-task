import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import PaginationItem from '@material-ui/lab/PaginationItem';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles({
  root: {
    '& .Mui-selected': {
      backgroundColor: 'yellow',
    },
    '& .Mui-selected:hover': {
      backgroundColor: 'green',
    },
    '& button': {
      color: '#fff',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      backgroundColor: '#97ce4c',
    },
    '& button:hover': {
      backgroundColor: '#f0e14a',
      color: 'red',
    },
  },
});

export const PaginationUi = ({
  countOfPages,
  page,
  handlePagination,
}) => {
  const classes = useStyles();

  return (
    <Pagination
      count={countOfPages}
      size="large"
      page={page}
      className={classes.root}
      variant="outlined"
      shape="rounded"
      color="secondary"
      onChange={handlePagination}
      renderItem={(item => (
        <PaginationItem
          {...item}
          className={classes.root}
        />
      ))}
    />
  );
};

PaginationUi.propTypes = {
  countOfPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  handlePagination: PropTypes.func.isRequired,
};
