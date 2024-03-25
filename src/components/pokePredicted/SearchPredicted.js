import React from "react";
import "./index.css";
import pokeboll from "../../assets/pokeball.png";
import { finnishLoadCard } from "../../function/finnishLoad";

export default function SearchPredicted(propsDataPoke) {
    return (
        <ul className="Predicted-poke-container">
            {
                propsDataPoke.DataPoke.map((element, index) => (
                    <li 
                        className={`predictedPoke-${index} Predicted_loading`} 
                        key={`Predicted:${element.name}${element.pokedex}`}
                    >
                        <img 
                            className="pokemon-image"
                            onLoad={()=>finnishLoadCard(
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
