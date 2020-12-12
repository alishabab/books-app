import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import getBooks from '../actions/book';

const Books = () => {
  const books = useSelector(state => state.books);
  const loading = useSelector(state => state.loading);
  const message = useSelector(state => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div>
      { loading && <p>Loading..</p>}
      { !loading && books.map(book => (
        <Link key={book.id} to={`/books/${book.id}`}>
          <p>{book.volumeInfo.title}</p>
        </Link>
      ))}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Books;
