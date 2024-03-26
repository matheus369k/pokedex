import React from "react";

export default function PokeImg(getData) {
    return (
        <img src={getData.dataImages} alt={`Pokedex ${getData.dataName}`} />
    );
}
