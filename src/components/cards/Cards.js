import React, { useContext } from "react";
import { ContextPoke } from "../../App";
import "./index.css";
import { finnishLoadCard } from "../../function/finnishLoad";

export default function Cards() {
    const {getData} = useContext(ContextPoke);
    
    return (
        <ul className='pokemons_container'>
            {
                getData.map((element, index) => (
                    <li className={`pokemon-${index} card_loading`} key={element.name}>
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
