import React, { useState } from 'react';
import { Router } from '@reach/router';

import { Menu } from '../components/menu/Menu';
import { RandomPage } from './page';

import './index.scss';

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
          <Menu currentPage={currentPage} />
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
