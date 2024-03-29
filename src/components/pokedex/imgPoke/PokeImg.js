import { finnishLoadCard } from "../../../function/finnishLoad";
import React from "react";
import "./index.css";

export default function PokeImg(getData) {
    return (
        <img 
            onLoad={()=>finnishLoadCard(
                ".pokedex_container",
                "pokedex_loading",
                1,
                ".pokedex_container"
            )} 
            className="img_container" 
            src={getData.dataImages} 
            alt={`Pokedex ${getData.dataName}`} 
        />
    );
}
