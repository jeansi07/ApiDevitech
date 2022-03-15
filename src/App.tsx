import React, { useContext, useState } from 'react';
import './App.css';
import { Search } from './components/Search/Search';
import Characters from './components/Characters';
import { ContextData } from './Context/dataContext/dataContext';
import { RickAndMorty } from './interfaces/rick-and-morty';

function App() {

  const [characters, setCharacters] = useState([] as RickAndMorty[])
  const [count, setCount] = useState(1)
  const [search, setSearch] = useState('')

  return (
    <div className="container">
      <ContextData.Provider value={{characters,setCharacters, count, setCount, search, setSearch}}>
        <header>
          <Search />
        </header>
        <Characters />
      </ContextData.Provider>

    </div>
  );
}

export default App;
