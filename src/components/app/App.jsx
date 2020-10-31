import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Header
} from 'react-router-dom';
import CharacterList from '../app/characters/CharacterList';
import Header from '../Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={CharacterList} />
      </Switch>
    </Router>
  );
}
