import React from "react";
import "./index.css";

export default function Evoluitons(getData) {
    return (
        <div className="evolutions_container">
            <h1>Evoluções:</h1>
            <ul
                className={`evolutin-line-${getData.evolutinLine}`}
            >
                {
                    getData.data.map((element, index) => (
                        <li
                            className={`evolutin number-evo-${index+1}`}
                            key={"evolutin-"+index}
                        >
                            <img src={element.img} alt={`evolutin-${element.name}`} />
                            {element.Lv != "+" && <p><span>level: </span>{element.Lv}</p>}
                            <p>{element.name}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
