import React from 'react';
import { render, screen } from '@testing-library/react';

import Thumbnail from '../components/Thumbnail';

describe('Thumbnail', () => {
  const book = {
    kind: 'books#volume',
    id: 'kIYSAAAAIAAJ',
    title: 'Thesavrvs Lingvae Latinae Compendiarivs Or, A Compendious Dictionary of the Latin Tongue',
    smallThumbnail: 'http://books.google.com/books/content?id=kIYSAAAAIAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
    thumbnail: 'http://books.google.com/books/content?id=kIYSAAAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    authors: [
      'Robert Ainsworth',
    ],
  };

  test('renders App component', () => {
    render(<Thumbnail book={book} />);

    expect(screen.getByAltText(book.title)).toBeInTheDocument();
  });
});
