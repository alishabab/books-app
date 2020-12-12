/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Book = () => {
  const { id } = useParams();
  const books = useSelector(state => state.books);
  const book = books.find(book => book.id === id);
  return (
    <div>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      <p>{book.volumeInfo.title}</p>
    </div>
  );
};

export default Book;
