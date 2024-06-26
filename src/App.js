import React, { useEffect, useState } from "react";
import { Header, Search, Cards, Pokedex, Button, SearchOfRegions } from "./components/index";
import { CardsContextProvider } from "./context/cards-context";
import { PokedexContextProvider } from "./context/pokedex-context";
import { RxDoubleArrowUp } from "react-icons/rx";
import { generation_1 } from "./data";
import { getUrlState, searchOfNumber, searchOfName, backScrollTop } from "./function/index";
import { get_data } from "./service/get-data";

export function App() {
  const [getCards, setCards] = useState(() => {
    const searchPoke = getUrlState("id");

    if (searchPoke === null || searchPoke === "") {
      return { search: false, data: generation_1.slice(0, 30) };
    }

    if (Number(searchPoke)) {
      return { search: false, data: searchOfNumber(parseInt(searchPoke), get_data(), 30) };
    }

    return { search: true, data: searchOfName(searchPoke, get_data(), 29) };
  });

  const [getPokedex, setPokedex] = useState(() => {
    const searchPoke = getUrlState("id");
    const PokedexThis = getUrlState("pokedex");

    if (PokedexThis === "closed" || PokedexThis === null || searchPoke === "") {
      return { status: false, data: [] };
    }

    if (searchPoke) {
      return {
        status: true,
        data: searchOfNumber(searchPoke, get_data(), 1)
      };
    }
  });

  useEffect(() => {
    document.body.addEventListener("scroll", () => {
      const heightScroll = document.body.scrollTop;
      const iconArrowTop = document.getElementById("scrollTop");

      if (heightScroll > 100) iconArrowTop.classList.remove("hide");
      if (heightScroll < 100) iconArrowTop.classList.add("hide");
    });
  }, [])
  return (
    <CardsContextProvider value={{ getCards, setCards }}>
      <PokedexContextProvider value={{ getPokedex, setPokedex }}>
        <Header
          getCards={getCards}
          setCards={setCards}
          getPokedex={getPokedex}
          setPokedex={setPokedex}
        />
        <Search
          setCards={setCards}
          setPokedex={setPokedex}
        />
        <main>
          {getPokedex.status
            ? <Pokedex
              getPokedex={getPokedex}
              setPokedex={setPokedex}
            />
            : <Cards
              getCards={getCards}
              setPokedex={setPokedex}
            />
          }
        </main>
        <SearchOfRegions
          setCards={setCards}
          setPokedex={setPokedex}
        />
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