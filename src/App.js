import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import { Header } from './components/Header';
import { Characters } from './components/Characters/Characters';
import { Episodes } from './components/Episodes/Episodes';
import { Locations } from './components/Locations/Locations';

import './App.scss';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Header />
        <main className="main">
          <Route path="/characters" component={Characters} />
          <Route path="/episodes" component={Episodes} />
          <Route path="/locations" component={Locations} />
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
