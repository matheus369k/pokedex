import React from "react";
import "./index.css";

export default function Types(getData) {
    return (
        <ul>
            {
                getData.data.map(element => (
                    <li 
                        className={`type_container ${element.type}`}
                        key={"tipo-"+element.type}
                    >
                        {element.type}
                    </li>
                ))
            }
        </ul>
    );
}
