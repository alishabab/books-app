import { GET_BOOKS, BOOKS_SUCCESS, BOOKS_FAIL } from '../actions/types';

const initialState = {
  books: [],
};

const booksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BOOKS:
      return {
        ...state,
        loading: true,
      };
    case BOOKS_SUCCESS:
      return {
        ...state,
        books: payload,
        loading: false,
      };
    case BOOKS_FAIL:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default booksReducer;
