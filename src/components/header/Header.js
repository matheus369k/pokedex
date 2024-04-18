import React, { useContext } from "react";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import logo from "../../assets/poke-titulo.png";
import "./index.css";
import { get_data } from "../../service/get-data";
import { searchOfNumber } from "../../function/filter-of-number";
import { openPokedex } from "../../function/open-pokedex";
import { Button } from "../button/button";

export function Header({
    getCards, 
    setCards, 
    getPokedex, 
    setPokedex 
}) {
    const totalPokemon = !getPokedex.status && getCards.search ? 1 : get_data().length;

    function countPages(page) {
        if (getPokedex.status) {
            return page;
        }
        if (getCards.search) {
            return 1;
        }
        return Math.ceil(page / 30);
    }

    function currentPokedexPage() {
        const id = getPokedex.data[0].number.split("#")[1];
        return parseInt(id);
    }

    function currentCardPage() {
        const id = getCards.data[0].number.split("#")[1]
        return parseInt(id);
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

        setCards({search: false, data: searchOfNumber(
            currentCardPage() + 30,
            get_data(),
            30
        )});
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

        setCards({search: false, data: searchOfNumber(
            currentCardPage() - 30,
            get_data(),
            30
        )});
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
                    id="btn-prevent"
                    title="Prevent"
                    disabled={verificationStateOfPages() === 1}
                    onClick={() => gotToPreviousPage(getPokedex.status)}
                >
                    <FcPrevious />
                </Button>
                <p>
                    <span>
                        {verificationStateOfPages()}
                    </span>
                    /
                    <span>
                        {countPages(totalPokemon)}
                    </span>
                </p>
                <Button
                    id="btn-next"
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
