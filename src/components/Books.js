import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getBooks from '../actions/book';

const Books = () => {
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <ul>
      {books.map(book => <li key={book.id}>{book.volumeInfo.title}</li>)}
    </ul>
  );
};

export default Books;
