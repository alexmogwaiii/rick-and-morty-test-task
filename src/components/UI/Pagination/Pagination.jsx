import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import PaginationItem from '@material-ui/lab/PaginationItem';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles({
  root: {
    color: '#97ce4c',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    boxShadow: '1px 1px 4px 97ce4c',
    border: '2px solid #97ce4c',
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
