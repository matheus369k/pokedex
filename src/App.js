import React, { createContext, useState } from 'react';
import Header from "./components/header/Header";
import Search from './components/search/Seach';
import {generation_1} from './data/index'
import Cards from './components/cards/Cards';

export const ContextPoke = createContext(null);

function App() {
  const [getData, setData] = useState(generation_1.slice(0, 30));
  return (
  <>
    <ContextPoke.Provider value={{getData, setData}}>
      <header>
        <Header />
        <Search />
      </header>
      <main>
        <Cards />
      </main>
    </ContextPoke.Provider>
  </>
  )
}

export default App;