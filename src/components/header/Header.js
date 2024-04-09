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
    const totalPokemon = get_data().length;
    const { getCards, setCards } = useContext(ContextCards);
    const { getPokedex, setPokedex } = useContext(ContextPokedex);

    function countPages(page) {
        return getPokedex.status ? page : Math.ceil(page / 30);
    }

    function currentPokedexPage() {
        return parseInt(getPokedex.data[0].number.split("#")[1]);
    }

    function currentCardPage() {
        return parseInt(getCards[0].number.split("#")[1]);
    }

    function gotToNextPage(pokedexOpen) {
        if (pokedexOpen) {
            openPokedex(
                currentPokedexPage() + 1,
                get_data(),
                setPokedex
            );
            return;
        }

        setCards(searchOfNumber(
            currentCardPage() + 30,
            get_data(),
            30
        ));
    }

    function gotToPreviousPage(pokedexOpen) {
        if (pokedexOpen) {
            openPokedex(
                currentPokedexPage() - 1,
                get_data(),
                setPokedex
            );
            return;
        }

        setCards(searchOfNumber(
            currentCardPage() - 30,
            get_data(),
            30
        ));
    }

    function verificationStateOfPages() {
        if (getPokedex.status) {
            return countPages(currentPokedexPage());
        }

        return countPages(currentCardPage());
    }

    return (
        <header className="header-container">
            <img src={logo} alt="Logo do site" />
            <div>
                <Button
                    title="Prevent"
                    disabled={verificationStateOfPages() === 1}
                    onClick={() => gotToPreviousPage(getPokedex.status)}
                >
                    <FcPrevious />
                </Button>
                <p>
                    <span>
                        {getPokedex.status
                            ? countPages(currentPokedexPage())
                            : countPages(currentCardPage())
                        }
                    </span>
                    /
                    <span>
                        {getPokedex.status
                            ? totalPokemon
                            : countPages(totalPokemon)
                        }
                    </span>
                </p>
                <Button
                    title="Next"
                    disabled={verificationStateOfPages() === countPages(totalPokemon)}
                    onClick={() => gotToNextPage(getPokedex.status)}
                >
                    <FcNext />
                </Button>
            </div>
        </header>
    );
}
