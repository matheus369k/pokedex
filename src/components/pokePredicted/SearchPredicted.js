import React, { useContext } from "react";
import "./index.css";
import pokeboll from "../../assets/pokeball.png";
import { finnishLoadCard } from "../../function/finnishLoad";
import { openPokedex } from "../../function/openPokedex";
import { ContextPokedex } from "../../App";
import { get_data } from "../../service/get_data";

export default function SearchPredicted(propsPredictedData) {
    const predictedData = propsPredictedData.data.getPredictedData;
    const {setPokedex} = useContext(ContextPokedex);
    const allDataPoke = get_data();
    
    if (predictedData.length === 0) return;

    document.addEventListener("click", (e) => {
        const ElementClicked = e.composedPath()[0];
        const fotherElementClicked = ElementClicked.parentNode;

        if (ElementClicked == undefined) return;
        if (ElementClicked?.classList?.contains("Predicted_poke_container")) return;
        if (ElementClicked?.classList?.contains("form_container")) return;
        if (fotherElementClicked?.classList.contains("form_container")) return;
        if (fotherElementClicked?.parentNode?.classList.contains("form_container")) return;
        if (fotherElementClicked?.parentNode?.parentNode?.classList.contains("form_container")) return;
        
        propsPredictedData.data.setPredictedData([]);
        e.stopImmediatePropagation();
    });

    return (
        <ul className="Predicted_poke_container">
            {
                predictedData.map((element, index) => (
                    <li
                        onClick={()=>openPokedex(
                            element.name,
                            allDataPoke,
                            setPokedex
                        )}
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
