import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Book from '../components/Book';

const mockStore = configureStore([]);

describe('Book React-Redux Component', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      books: [
        {
          kind: 'books#volume',
          id: 'kIYSAAAAIAAJ',
          title: 'Thesavrvs Lingvae Latinae Compendiarivs Or, A Compendious Dictionary of the Latin Tongue',
          smallThumbnail: 'http://books.google.com/books/content?id=kIYSAAAAIAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail: 'http://books.google.com/books/content?id=kIYSAAAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          authors: [
            'Robert Ainsworth',
          ],
        },
      ],
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <Router>
          <Book />
        </Router>
      </Provider>,
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should not dispatch action if books length is greather than 0', () => {
    expect(store.dispatch).toHaveBeenCalledTimes(0);
  });
});
