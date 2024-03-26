import React from "react";

export default function Status(getData) {
    return (
        <ul 
            className="status_basic"
            key={"status-"}
        >
            <li><span>HP: </span> {getData.data.HP}</li>
            <li><span>Attack: </span> {getData.data.Atack}</li>
            <li><span>Defense: </span> {getData.data.Defense}</li>
            <li><span>Sp.attack: </span> {getData.data["Sp.atack"]}</li>
            <li><span>Sp.Def: </span> {getData.data["Sp.Def"]}</li>
            <li><span>Speed: </span> {getData.data.Speed}</li>
        </ul>          
    );
}
