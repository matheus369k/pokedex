import React from "react";
import "./index.css";

export default function PokeImg(getData) {
    return (
        <img className="img_container" src={getData.dataImages} alt={`Pokedex ${getData.dataName}`} />
    );
}
