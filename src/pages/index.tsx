import React from 'react';

import { Menu } from '../components/menu/Menu';
import menuStructure from './menuStructure.json'

import './index.scss';

function App() {
  return (
    <div className="sidebar-app">
      <header className="app-header">
        <h1>Header</h1>
      </header>
      <aside>
        <Menu menuStructure={menuStructure.data} />
      </aside>
      <main>
        The main content of the application
      </main>
    </div>
  );
}

export default App;
