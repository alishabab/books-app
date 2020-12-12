import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Appbar from './components/Appbar';
import Books from './components/Books';
import Book from './components/Book';

function App() {
  return (
    <div>
      <Appbar />
      <Switch>
        <Route exact path={['/', '/books']} component={Books} />
        <Route exact path="/books/:id" component={Book} />
      </Switch>
    </div>
  );
}

export default App;
