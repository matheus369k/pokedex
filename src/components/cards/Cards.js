import React, { useContext } from "react";
import { ContextPokemons, ContextPokedex } from "../../App";
import "./index.css";
import { finnishLoadCard } from "../../function/finnishLoad";
import { searchOfName } from "../../function/filterOfName";
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
                        onClick={()=> setPokedex(
                                {
                                    status: true,
                                    data: searchOfName(element.name, allDataPoke, 1)
                                }
                            )
                        }
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
