import React from 'react';
import { Switch, Route, HashRouter, Link } from 'react-router-dom';

import { Header } from './components/Header';
import { Characters } from './components/Characters/CharactersList';

import './App.scss';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <main className="main">
        <HashRouter basename="/">
          <Header />

          <Route path="/">
            <h2 className="main__start">
              Home
            </h2>
          </Route>
          <Route path="/characters" component={Characters} />
        </HashRouter>
      </main>
    </div>
  );
}

export default App;
