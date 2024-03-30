import React, { useContext } from "react";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import logo from "../../assets/poke-titulo.png";
import "./index.css";
import { get_data } from "../../service/get_data";
import { ContextPokedex, ContextPokemons } from "../../App";
import { searchOfNumber } from "../../function/filterOfNumber";
import { openPokedex } from "../../function/openPokedex";

export default function Header() {
    const length_pokemons = get_data().length - 1;
    const {getData, setData} = useContext(ContextPokemons);
    const {getPokedex, setPokedex} = useContext(ContextPokedex);
    const number_pokemon = getData[0].number.split("#")[1];

    const countPage = (pokemon_page) => {
        const count = Math.floor(pokemon_page / 29) + 1;
        return count;
    };
    
    const countPokedexPage = (get_Pokedex) => {
        const pokedex = get_Pokedex.data[0].number.split("#")[1];
        return pokedex;
    };

    const nextPrevPages = (
        props_numbers, 
        all_data_pokes, 
        props_number_pokemon, 
        props_length_poke,
        props_get_pokedex,
        props_set_pokedex
    ) => {
        if (props_get_pokedex.status){
            const numberPokedex = parseInt(countPokedexPage(props_get_pokedex));
            const minusPlus = props_numbers > 0 ? 1 : -1;
            const newPokedexPage = numberPokedex + minusPlus;

            if (props_length_poke < newPokedexPage && props_numbers > 0) return;
            if (numberPokedex === 1 && props_numbers < 0) return;

            openPokedex(
                newPokedexPage,
                all_data_pokes,
                props_set_pokedex
            );

            return;
        }
        const poke_page = parseInt(props_number_pokemon - 1)+props_numbers;
        const page_current = countPage(props_number_pokemon);
        const all_pages = countPage(props_length_poke);

        if (page_current == all_pages && props_numbers > 0) return;
        if (page_current == 1 && props_numbers < 0) return;

        setData(searchOfNumber(poke_page ,all_data_pokes, 30));
        
    };

    return (
        <header className='header-container'>
            <img src={logo} alt='Logo do site' />
            <div>
                <button 
                    title='Prevent' 
                    onClick={()=>nextPrevPages(
                        -30,
                        get_data(),
                        number_pokemon,
                        length_pokemons,
                        getPokedex,
                        setPokedex
                    )}
                >
                    <FcPrevious />
                </button>
                <p>
                    <span>
                        {getPokedex.status ? Math.abs(countPokedexPage(getPokedex)):countPage(number_pokemon)}
                    </span>
                    /
                    <span>{getPokedex.status ? length_pokemons + 1 : countPage(length_pokemons)}</span>
                </p>
                <button 
                    title='Next' 
                    onClick={()=>nextPrevPages(
                        30,
                        get_data(),
                        number_pokemon,
                        length_pokemons,
                        getPokedex,
                        setPokedex
                    )}
                >
                    <FcNext />
                </button>
            </div>
        </header>
    );
}
