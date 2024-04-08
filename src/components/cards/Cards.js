import React from "react";
import "./index.css";
import "./responsive.css";
import { finnishLoadCard } from "../../function/finnishLoad";
import { openPokedex } from "../../function/openPokedex";
import { get_data } from "../../service/get_data";

export function Cards(data) {
    const allDataPoke = get_data();

    return (
        <section>
            <ul className='pokemons_container'>
                {
                    data.getData.map((element, index) => (
                        <li
                            onClick={() => openPokedex(
                                element.number,
                                allDataPoke,
                                data.setPokedex
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
        </section>
    );
}
