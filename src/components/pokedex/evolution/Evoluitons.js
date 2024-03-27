import React from "react";
import "./index.css";

export default function Evoluitons(getData) {
    return (
        <div className="evolutions_container">
            <h1>Evoluções:</h1>
            <ul>
                {
                    getData.data.map((element, index) => (
                        <li
                            className="evolutin"
                            key={"evolutin-"+index}
                        >
                            <img src={element.img} alt={`evolutin-${element.name}`} />
                            <p><span>level: </span>{element.Lv}</p>
                            <p>{element.name}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
