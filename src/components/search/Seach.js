import React, { useContext, useState } from "react";
import "./index.css";
import img from "../../assets/pokeball.png";
import {
    BiSearch
} from "react-icons/bi";
import {
    useForm
} from "react-hook-form";
import { get_data, predicted_data } from "../../service/get_data";
import { ContextPoke } from "../../App";
import { searchOfNumber } from "../../function/filter";
import SearchPredicted from "../pokePredicted/SearchPredicted";

export default function Seach() {
    const {setData} = useContext(ContextPoke);
    const [getPredicted, setPredicted] = useState([]);    
    const {
        register,
        handleSubmit,
        watch
    } = useForm();

    watch((data)=>{
        const pokemons_all_predicted = predicted_data();

        if (Number(data.search)) 
            return setPredicted(searchOfNumber(data.search, pokemons_all_predicted, 3));
            
        return setPredicted(searchOfName(data.search, pokemons_all_predicted, 2));
    });

    const onSubmit = (data) => {
        const pokemons_all = get_data();
        setPredicted([]);

        if (Number(data.search)) 
            return setData(searchOfNumber(data.search, pokemons_all, 30));
         
        return setData(searchOfName(data.search, pokemons_all, 29));
    };

    const searchOfName = (search, pokemons_all, numberAllGet) => {
        const pokemons_filter = [];
        pokemons_all.filter(element => {
            const search_length = search.split("").length;
            const name_poke = element.name.slice(0, search_length).toLowerCase();

            if (pokemons_filter.length > numberAllGet || element == undefined) return;
            if (name_poke == search) pokemons_filter.push(element);
        });
        return pokemons_filter;
    };

    return (
        <>
            <form 
                onSubmit={handleSubmit(onSubmit)}   
                className = "form_container" 
            >
            <label htmlFor='input'>
                < BiSearch />
            </label> 
            <img 
                className="pokeboll"
                src={img}/>
                <input 
                maxLength={16}
                autoComplete = "off"
                id = "input"
                name = 'search'
                type = "text" {
                    ...register("search")
                }
                placeholder = "Search..." 
            />
            </form>
            <SearchPredicted DataPoke={getPredicted} />
        </>
    );
}