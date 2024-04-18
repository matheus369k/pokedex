import React from "react";
import "./index.css";
import pokeboll from "../../../assets/pokeball.png";
import { finnishLoadCard } from "../../../function/finnish-load";
import { openPokedex } from "../../../function/open-pokedex";
import { get_data } from "../../../service/get-data";

export function Predicted({ getPredictedData, setPredictedData, setPokedex }) {
    const allDataPoke = get_data();

    document.addEventListener("click", () => {
        const elementClicking = event.composedPath();

        if (getPredictedData.length === 0) return;

        if (elementClicking[0]?.classList?.contains("form_container")) return;
        if (elementClicking[1]?.classList?.contains("form_container")) return;
        if (elementClicking[2]?.classList?.contains("form_container")) return;
        if (elementClicking[3]?.classList?.contains("form_container")) return;

        setPredictedData([]);
        event.stopImmediatePropagation()
    })

    return (
        <ul className="Predicted_poke_container">
            {
                getPredictedData.map((element, index) => (
                    <li
                        onClick={() => openPokedex(
                            element.pokedex,
                            allDataPoke,
                            setPokedex
                        )}
                        className={`predictedPoke-${index} Predicted_loading`}
                        key={`Predicted:${element.name}${element.pokedex}`}
                    >
                        <img
                            className="pokemon-image"
                            onLoad={() => finnishLoadCard(
                                `.predictedPoke-${index}`,
                                "Predicted_loading",
                                index,
                                ".Predicted-poke-container>li"
                            )}
                            src={element.images}
                            alt={`Pokemon:${element.name}`}
                        />
                        <div>
                            <p>{element.name}</p>
                            <p>{element.pokedex}</p>
                        </div>
                        <img
                            className="pokeboll-image"
                            src={pokeboll}
                            alt='Pokeboll Icon'
                        />
                    </li>

                ))
            }
        </ul>
    );
}
