import { BOOKS_SUCCESS, BOOKS_FAIL } from '../actions/types';

const initialState = {
  books: [],
};

const booksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case BOOKS_SUCCESS:
      return {
        ...state,
        books: payload,
      };
    case BOOKS_FAIL:
      return {
        ...state,
        message: payload,
      };
    default:
      return state;
  }
};

export default booksReducer;
