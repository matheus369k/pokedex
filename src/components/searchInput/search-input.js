import React, { useState } from "react";
import "./index.css";
import img from "../../assets/pokeball.png";
import { BiSearch } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { get_data, predicted_data } from "../../service/get-data";
import { searchOfNumber } from "../../function/filter-of-number";
import { SearchPredicted } from "../pokePredicted/search-predicted";
import { searchOfName } from "../../function/filter-of-name";
import { closePokedex } from "../../function/close-pokedex";

export function Search({ setCards, setPokedex }) {
    const [getPredictedData, setPredictedData] = useState([]);
    
    const {
        register,
        handleSubmit,
        watch
    } = useForm();

    watch((data) => {
        const pokemonsAllPredicted = predicted_data();

        if (Number(data.search))
            return setPredictedData(searchOfNumber(data.search, pokemonsAllPredicted, 3));

        return setPredictedData(searchOfName(data.search, pokemonsAllPredicted, 2));
    });

    const onSubmit = (data) => {
        const pokemonsAll = get_data();

        setPredictedData([]);
        closePokedex(setPokedex);

        if (Number(data.search))
            return setCards({search: false, data: searchOfNumber(data.search, pokemonsAll, 30)});

        return setCards({search: true, data: searchOfName(data.search, pokemonsAll, 29)});
    };

    return (
        <div className="search-container">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="form_container"
            >
                <label htmlFor="search">
                    < BiSearch />
                </label>
                <img
                    className="pokeboll"
                    src={img}
                />
                <input
                    maxLength={16}
                    autoComplete="off"
                    className="search"
                    id="search"
                    name="search"
                    type="text" {
                    ...register("search")
                    }
                    placeholder="Search..."
                />
            </form>
            <SearchPredicted
                getPredictedData={getPredictedData}
                setPredictedData={setPredictedData}
                setPokedex={setPokedex}
            />
        </div>
    );
}