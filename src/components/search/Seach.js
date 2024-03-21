import React from 'react';
import "./index.css";
import img from "../../assets/pokeball.png";
import {
    BiSearch
} from "react-icons/bi";
import {
    useForm
} from "react-hook-form";
import get_data from '../../service/get_data';

export default function Seach() {
    const {
        register,
        handleSubmit
    } = useForm();

    const onSubmit = (data) => {
        const pokemons_all = get_data();

        if (Number(data.search)) 
            return searchOfNumber(data.search, pokemons_all);
         
        return searchOfName(data.search, pokemons_all);
    };

    const searchOfName = (search, pokemons_all) => {
        const pokemons_filter = [];
        pokemons_all.filter(element => {
            const search_length = search.split("").length;
            const name_poke = element.name.slice(0, search_length).toLowerCase();

            if (pokemons_filter.length > 29) return;
            if (name_poke == search) pokemons_filter.push(element);
        })
        return pokemons_filter;
    };

    const searchOfNumber = (search, pokemons_all) => {
        const pokemons_filter = [];
        for (let index = 0; index < 30; index++) {
            if (pokemons_filter.length == 30) return;
            pokemons_filter.push(pokemons_all[parseInt(search) + index])
        }
        return pokemons_filter;
    };

    return ( 
        <form 
        onSubmit={handleSubmit(onSubmit)}   
        className = "form_container" 
        >
        <label htmlFor='input'>< BiSearch /></label> 
        <img 
        className="pokeboll"
        src={img}/>
        <input 
        maxLength={16}
        autoComplete = "off"
        id = "input"
        name = 'search'
        type = "text" {
            ...register('search')
        }
        placeholder = "Search..." 
        />
        </form>
    )
}