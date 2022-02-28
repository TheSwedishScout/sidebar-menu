import React, { useState } from 'react';

import { Menu } from '../components/menu/Menu';
import menuStructure from './menuStructure.json'

import './index.scss';
import { RandomPage } from './page';
import { createHistory, createMemorySource, LocationProvider, Router } from '@reach/router';

function App() {
  // let source = createMemorySource("/")
  // let history = createHistory(source);
  const [currentPage, setCurrentPage] = useState('/')
  return (
    // <LocationProvider history={history}>
      <div className="sidebar-app">
        <header className="app-header">
          <h1>Page title</h1>
        </header>
        <aside>
          <Menu currentPage={currentPage} menuStructure={menuStructure.data} />
        </aside>
        <main>
          <Router> 
            <RandomPage setCurrentPage={setCurrentPage} path="/:page"/>
          </Router>
        </main>
      </div>
    // </LocationProvider>
  );
}

export default App;
