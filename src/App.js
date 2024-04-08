import React, { useState } from "react";
import { Header } from "./components/header/header";
import { Search } from "./components/searchInput/search-input";
import { Cards } from "./components/cards/cards";
import { Pokedex } from "./components/pokedex/pokedex";
import { Button } from "./components/button/button";
import { SearchOfRegions } from "./components/searchOfRegions/search-of-region";
import { CardsContextProvider } from "./context/cards-context";
import { PokedexContextProvider } from "./context/pokedex-context";
import { RxDoubleArrowUp } from "react-icons/rx";
import { generation_1 } from "./data";

export function App() {
  const [getCards, setCards] = useState(generation_1.slice(0, 30));
  const [getPokedex, setPokedex] = useState({ status: false, data: [] });

  document.body.addEventListener("scroll", () => {
    const heightScroll = document.body.scrollTop;
    const iconArrowTop = document.getElementById("scrollTop");

    if (heightScroll > 100) iconArrowTop.classList.remove("hide");
    if (heightScroll < 100) iconArrowTop.classList.add("hide");
  });

  const backScrollTop = () => {
    document.body.scrollTop = 0;
  };

  return (
    <CardsContextProvider value={{ getCards, setCards }}>
      <PokedexContextProvider value={{ getPokedex, setPokedex }}>
        <Header />
        <Search />
        {getPokedex.status
          ? <Pokedex />
          : <Cards getData={getCards} setPokedex={setPokedex} />
        }
        <SearchOfRegions />
        <Button
          title="Voltar para o inicio"
          onClick={() => backScrollTop()}
          id="scrollTop"
          className="icon-btn-top hide"
        >
          <RxDoubleArrowUp />
        </Button>
      </PokedexContextProvider>
    </CardsContextProvider>
  );
}