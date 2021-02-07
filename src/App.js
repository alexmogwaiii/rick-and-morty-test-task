import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import { Header } from './components/Header';
import { Characters } from './components/Characters/Characters';
import { Episodes } from './components/Episodes/Episodes';
import { Locations } from './components/Locations/Locations';
import { WatchList } from './components/WatchList/WatchList';

import './App.scss';

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Header />
        <main className="main">
          <Route path="/characters" component={Characters} />
          <Route path="/episodes" component={Episodes} />
          <Route path="/locations" component={Locations} />
          <Route path="/watch-list" component={WatchList} />
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
