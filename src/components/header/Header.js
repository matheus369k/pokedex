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

    function currentPage({ data }) {
        return parseInt(data[0].number.split("#")[1]);
    }

    function gotToNextPage({ status }) {

        if (status) {
            openPokedex(
                currentPage(getPokedex) + 1,
                get_data(),
                setPokedex
            );
            return;
        }

        setCards({
            search: false, data: searchOfNumber(
                currentPage(getCards) + 30,
                get_data(),
                30
            )
        });
    }

    function gotToPreviousPage({ status }) {

        if (status) {
            openPokedex(
                currentPage(getPokedex) - 1,
                get_data(),
                setPokedex
            );
            return;
        }

        setCards({
            search: false, data: searchOfNumber(
                currentPage(getCards) - 30,
                get_data(),
                30
            )
        });
    }

    function verificationStateOfPages() {
        let pokedex = currentPage(getCards);

        if (getPokedex.status) {
            pokedex = currentPage(getPokedex);
        };

        return countPages(pokedex);
    }

    return (
        <header className="header-container">
            <img src={logo} alt="Logo do site" />
            <div>
                <Button
                    id="btn-prevent"
                    title="Prevent"
                    disabled={verificationStateOfPages() === 1}
                    onClick={()=>gotToPreviousPage(getPokedex)}
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
                    onClick={()=>gotToNextPage(getPokedex)}
                >
                    <FcNext />
                </Button>
            </div>
        </header>
    );
}
