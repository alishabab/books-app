import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ShopIcon from '@material-ui/icons/Shop';
import CircularProgress from '@material-ui/core/CircularProgress';
import getBooks from '../actions/book';

const useStyles = makeStyles(() => ({
  root: {
    width: '95%',
    margin: '0 auto',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'space-around',
  },

  image: {
    minWidth: '50%',
    maxHeight: '500px',
  },

  button: {
    marginRight: '10px',
  },

  progress: {
    textAlign: 'center',
    marginTop: '20px',
  },
}));

const Book = () => {
  const { id } = useParams();
  const books = useSelector(state => state.books);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  useEffect(() => {
    if (books.length === 0) {
      dispatch(getBooks());
    }
  }, []);
  const goBackHandle = () => {
    history.goBack();
  };
  const book = books.find(book => book.id === id);
  return (
    <div>
      { loading && (
        <div className={classes.progress}>
          <CircularProgress color="secondary" />
        </div>
      )}
      { book && (
      <div className={classes.root}>
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
          className={classes.image}
        />
        <div>
          <h3>{book.volumeInfo.title}</h3>
          <p>{book.volumeInfo.subtitle}</p>
          <h4>
            Authored By:
            <i>{book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Not Available'}</i>
          </h4>
          <div>
            <Button onClick={goBackHandle} variant="contained" className={classes.button}>Back</Button>
            <Button variant="contained" href={book.saleInfo.buyLink} color="primary" target="_blank">
              <ShopIcon />
              Buy
            </Button>
          </div>
        </div>
      </div>
      ) }
    </div>
  );
};

export default Book;
