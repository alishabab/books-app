import axios from 'axios';

const API_URL = 'https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q=a';

const getBooks = () => axios.get(API_URL);

export default {
  getBooks,
};
