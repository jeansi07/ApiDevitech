import React from 'react';
import './App.css';
import { Search } from './components/Search/Search';
import Characters from './components/Characters';

function App() {
  return (
    <div className="App">
      <header>
        <Search/>
      </header>

      <Characters character={} />
    </div>
  );
}

export default App;
