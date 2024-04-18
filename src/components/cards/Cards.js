import React from "react";
import "./index.css";
import "./responsive.css";
import { finnishLoadCard } from "../../function/finnish-load";
import { openPokedex } from "../../function/open-pokedex";
import { get_data } from "../../service/get-data";

export function Cards({ getCards, setPokedex }) {
    const allDataPoke = get_data();

    function clickToCard({number}) {
        return parseInt(number.split("#")[1]);
    }

    return (
        <ul className='pokemons_container'>
            {
                getCards.data.map((element, index) => (
                    <li
                        onClick={() => openPokedex(
                            clickToCard(element),
                            allDataPoke,
                            setPokedex
                        )}
                        id={element.name}
                        className={`pokemon-${index} card_loading`}
                        key={element.name}
                    >
                        <img
                            onLoad={() => finnishLoadCard(
                                `.pokemon-${index}`,
                                "card_loading",
                                index,
                                ".pokemons_container>li"
                            )}
                            src={`${element.images}`}
                            alt={`Pokemon: ${element.name}${element.number}`}
                        />
                        <div>
                            <p><span>Pokedex: </span>{element.number}</p>
                            <p><span>Nome: </span>{element.name}</p>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}
