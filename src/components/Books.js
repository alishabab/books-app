import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import Book from './Book';
import getBooks from '../actions/book';

const Books = () => {
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div>
      {books.map(book => (
        <Link key={book.id} to={`/books/${book.id}`}>
          <p>{book.volumeInfo.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default Books;
