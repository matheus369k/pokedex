import React from "react";

export default function Evoluitons(getData) {
    return (
        <ul className="evolutions_container">
            {
                getData.data.map((element, index) => (
                    <li 
                        className="evolutin"
                        key={"evolutin-"+index}
                    >
                        <img src={element.img} alt={`evolutin-${element.name}`} />
                        <p><span>level: </span>{element.Lv}</p>
                        <span>{element.name}</span>
                    </li>
                ))
            }
        </ul>
    );
}
