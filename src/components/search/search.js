import React, { useState } from "react";
import "./index.css";
import { Predicted } from "./predicted/predicted";
import { Form } from "./form/form";

export function Search({ setCards, setPokedex }) {
    const [getPredictedData, setPredictedData] = useState([]);
    
    return (
        <div className="search-container">
            <Form 
                setCards={setCards} 
                setPokedex={setPokedex} 
                setPredictedData={setPredictedData}
            />
            <Predicted
                getPredictedData={getPredictedData}
                setPredictedData={setPredictedData}
                setPokedex={setPokedex}
            />
        </div>
    );
}