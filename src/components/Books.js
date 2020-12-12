import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import getBooks from '../actions/book';
import Thumbnail from './Thumbnail';

const useStyles = makeStyles(() => ({
  root: {
    margin: '0 auto',
    width: '95%',
    flex: '1 1 0',
    justifyContent: 'center',
  },

  link: {
    textDecoration: 'none',
  },

  progress: {
    marginTop: '20px',
  },
}));

const Books = () => {
  const books = useSelector(state => state.books);
  const loading = useSelector(state => state.loading);
  const message = useSelector(state => state.message);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (books.length === 0) {
      dispatch(getBooks());
    }
  }, [dispatch]);

  return (
    <div>
      { loading && <CircularProgress color="secondary" className={classes.progress} /> }
      <Grid container className={classes.root} spacing={8}>
        { !loading && books.map(book => (
          <Grid item xs={12} sm={6} lg={4} xl={4} key={book.id}>
            <Link to={`/books/${book.id}`} className={classes.link}>
              <Thumbnail book={book} />
            </Link>
          </Grid>
        ))}
      </Grid>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Books;
