import React, { useContext } from "react";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import logo from "../../assets/poke-titulo.png";
import "./index.css";
import { get_data } from "../../service/get_data";
import { searchOfNumber } from "../../function/filterOfNumber";
import { openPokedex } from "../../function/openPokedex";
import { ContextPokedex } from "../../context/pokedex-context";
import { ContextCards } from "../../context/cards-context";
import { Button } from "../button/button";

export function Header() {
    const length_pokemons = get_data().length - 1;
    const { getCards, setCards } = useContext(ContextCards);
    const { getPokedex, setPokedex } = useContext(ContextPokedex);
    const number_pokemon = getCards[0].number.split("#")[1];

    function countCardsPages(pokemon_page) {
        return Math.ceil(pokemon_page / 29);
    }

    function countPokedexPages(get_Pokedex) {
        return get_Pokedex.data[0].number.split("#")[1];
    }

    function nextPrevPages(props_numbers) {
        if (getPokedex.status) {
            const numberPokedex = parseInt(countPokedexPages(getPokedex));
            const minusPlus = props_numbers > 0 ? 1 : -1;
            const newPokedexPage = numberPokedex + minusPlus;

            if (length_pokemons + 1 < newPokedexPage && props_numbers > 0) return;
            if (numberPokedex === 1 && props_numbers < 0) return;

            openPokedex(
                newPokedexPage,
                get_data(),
                setPokedex
            );

            return;
        }

        const poke_page = parseInt(number_pokemon - 1) + props_numbers;
        const page_current = countCardsPages(number_pokemon);
        const all_pages = countCardsPages(length_pokemons);

        if (page_current == all_pages && props_numbers > 0) return;
        if (page_current == 1 && props_numbers < 0) return;

        setCards(searchOfNumber(
            poke_page,
            get_data(),
            30
        ));

    }

    return (
        <header className="header-container">
            <img src={logo} alt="Logo do site" />
            <div>
                <Button
                    title="Prevent"
                    onClick={() => nextPrevPages(-30)}
                >
                    <FcPrevious />
                </Button>
                <p>
                    <span>
                        {getPokedex.status ? Math.abs(countPokedexPages(getPokedex)) : countCardsPages(number_pokemon)}
                    </span>
                    /
                    <span>{getPokedex.status ? length_pokemons + 1 : countCardsPages(length_pokemons)}</span>
                </p>
                <Button
                    title="Next"
                    onClick={() => nextPrevPages(30)}
                >
                    <FcNext />
                </Button>
            </div>
        </header>
    );
}
