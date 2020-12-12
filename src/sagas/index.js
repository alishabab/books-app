import {
  put, takeEvery, all,
} from 'redux-saga/effects';
import { BOOKS_SUCCESS, BOOKS_FAIL, GET_BOOKS } from '../actions/types';
import bookService from '../service/book.service';

function* fetchBooks() {
  try {
    const { data } = yield bookService.getBooks();
    const books = data.items;
    yield put({ type: BOOKS_SUCCESS, payload: books });
  } catch (err) {
    yield put({ type: BOOKS_FAIL, payload: err.message });
  }
}
function* actionWatcher() {
  yield takeEvery(GET_BOOKS, fetchBooks);
}
export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
