/* eslint-disable no-console */
import {
  put, takeLatest, all,
} from 'redux-saga/effects';
import { BOOKS_SUCCESS, BOOKS_FAIL, GET_BOOKS } from '../actions/types';
import bookService from '../service/book.service';

function* fetchBooks() {
  try {
    const { data } = yield bookService.getBooks();
    const books = data.items;
    console.log(books);
    yield put({ type: BOOKS_SUCCESS, payload: books });
  } catch (err) {
    console.log(err);
    yield put({ type: BOOKS_FAIL, payload: err.message });
  }
}
function* actionWatcher() {
  yield takeLatest(GET_BOOKS, fetchBooks);
}
export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
