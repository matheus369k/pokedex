import React from "react";
import "./index.css";

export default function Status(getData) {
    return (
        <div className="status_basic">
            <h1>Status:</h1>
            <ul>
                <li><span>HP: </span> <span>{getData.data.HP}</span></li>
                <li><span>Attack: </span> <span>{getData.data.Atack}</span></li>
                <li><span>Defense: </span> <span>{getData.data.Defense}</span></li>
                <li><span>Sp.attack: </span> <span>{getData.data["Sp.atack"]}</span></li>
                <li><span>Sp.Def: </span> <span>{getData.data["Sp.Def"]}</span></li>
                <li><span>Speed: </span> <span>{getData.data.Speed}</span></li>
            </ul>  
        </div>        
    );
}
