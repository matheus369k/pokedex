import React, { createContext, useState } from "react";
import Header from "./components/header/Header";
import Search from "./components/search/Seach";
import {generation_1} from "./data/index";
import Cards from "./components/cards/Cards";
import Pokedex from "./components/pokedex/PokedexContainer";

export const ContextPokemons = createContext(null);
export const ContextPokedex = createContext(null);

function App() {
  const [getData, setData] = useState(generation_1.slice(0, 30));
  const [getPokedex, setPokedex] = useState({status: false, data: []});

  return (
  <>
    <ContextPokemons.Provider value={{getData, setData}}>
      <ContextPokedex.Provider value={{getPokedex, setPokedex}}>
        <header>
          <Header />
          <Search />
        </header>
        <main>
          {getPokedex.status ? <Pokedex infor={getPokedex} />:<Cards />}
        </main>
      </ContextPokedex.Provider>
    </ContextPokemons.Provider>
  </>
  );
}

export default App;