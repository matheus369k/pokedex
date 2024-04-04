import React, { useContext } from "react";
import { ContextPokedex, ContextPokemons } from "../../App";
import "./index.css";
import "./responsive.css";
import { finnishLoadCard } from "../../function/finnishLoad";
import { openPokedex } from "../../function/openPokedex";
import { get_data } from "../../service/get_data";

export default function Cards() {
    const {getData} = useContext(ContextPokemons);
    const {setPokedex} = useContext(ContextPokedex);
    const allDataPoke = get_data();
    
    return (
        <ul className='pokemons_container'>
            {
                getData.map((element, index) => (
                    <li
                        onClick={()=> openPokedex(
                            element.number,
                            allDataPoke,
                            setPokedex
                        )}
                        className={`pokemon-${index} card_loading`}
                        key={element.name}
                    >
                        <img 
                            onLoad={()=>finnishLoadCard(
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
