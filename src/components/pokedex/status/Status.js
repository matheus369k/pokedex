import React from "react";
import "./index.css";

export default function Status(getData) {
    return (
        <div 
            className="status_basic"
        >
            <h1>Status:</h1>
            <ul>
                <li><span>HP: </span> <span>{getData.dataStatus.HP}</span></li>
                <li><span>Attack: </span> <span>{getData.dataStatus.Atack}</span></li>
                <li><span>Defense: </span> <span>{getData.dataStatus.Defense}</span></li>
                <li><span>Sp.attack: </span> <span>{getData.dataStatus["Sp.atack"]}</span></li>
                <li><span>Sp.Def: </span> <span>{getData.dataStatus["Sp.Def"]}</span></li>
                <li><span>Speed: </span> <span>{getData.dataStatus.Speed}</span></li>
            </ul>  
        </div>        
    );
}
