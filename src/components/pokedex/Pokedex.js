import React from "react";
import Evoluitons from "./evolution/Evoluitons";
import Status from "./status/Status";
import BasicInfor from "./basicInfor/BasicInfor";
import PokeImg from "./imgPoke/PokeImg";
import "./index.css";

export default function Pokedex() {
    const pokemons = [{
        "name": "Bulbasaur",
        "number": "#0001",
        "types": [{
                "type": "Grama"
            },
            {
                "type": "Veneno"
            }
        ],
        "images": "./poke-png-G1/001.png",
        "evolutinLine": 111,
        "evolution": [{
                "name": "Bulbasaur",
                "Lv": 1,
                "img": "./poke-png-G1/001.png"
            },
            {
                "name": "Ivysaur",
                "Lv": 16,
                "img": "./poke-png-G1/002.png"
            },
            {
                "name": "Venusaur",
                "Lv": 32,
                "img": "./poke-png-G1/003.png"
            }
        ],
        "superdamange": [{
                "type": "Fogo"
            },
            {
                "type": "Gelo"
            },
            {
                "type": "Pisquico"
            },
            {
                "type": "Voador"
            }
        ],
        "baseStats": {
            "HP": 45,
            "Atack": 49,
            "Defense": 49,
            "Sp.atack": 65,
            "Sp.Def": 65,
            "Speed": 45
        },
        "description": "Uma estranha semente foi plantada em suas costas em seu nascimento. A planta brota e cresce com este Pokémon. Por algum tempo depois de seu nascimento, cresce ganhando nutrição da semente em suas costas."
    }];
    return (
        <>
            {
                pokemons.map((element/* , index */) => (
                    <div
                        className="pokedex_container"
                        key={"pokedex:"+element.name}
                    >
                        <BasicInfor 
                            dataName={element.name}
                            dataPokedex={element.number}
                            datatype={element.types}
                            dataDamage={element.superdamange}
                            dataDescription={element.description}
                        />
                        <PokeImg 
                            dataImages={element.images} 
                            dataName={element.name} 
                        />
                        <Status data={element.baseStats} /> 
                        <Evoluitons data={element.evolution} />
                    </div>
                ))
            } 
        </>
    );
}