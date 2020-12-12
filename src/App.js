import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Appbar from './components/Appbar';
import Books from './components/Books';
import Thumbnail from './components/Thumbnail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Appbar />
      <Switch>
        <Route exact path={['/', '/books']} component={Books} />
        <Route exact path="/books/:id" component={Thumbnail} />
      </Switch>
    </div>
  );
}

export default App;
