import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Books from './components/Books';
import Book from './components/Book';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={['/', '/books']} component={Books} />
        <Route exact path="/books/:id" component={Book} />
      </Switch>
    </div>
  );
}

export default App;
