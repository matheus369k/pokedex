import React from "react";
import Types from "../type/Types";

export default function BasicInfor(getData) {
    return (
        <div 
            className="basic_infor"
        >
            <p><span>Nome: </span> {getData.dataName}</p>
            <p><span>Pokedex: </span> {getData.dataPokedex}</p>
            <div><span>Tipos: </span><Types data={getData.datatype} /></div>
            <div><span>Fraquezas: </span><Types data={getData.dataDamage} /></div>
            <p>{getData.dataDescription}</p>
        </div>
    );
}
