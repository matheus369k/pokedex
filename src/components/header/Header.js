import React, { useContext } from 'react';
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import logo from "../../assets/poke-titulo.png"
import './index.css';
import get_data from '../../service/get_data';
import { ContextPoke } from '../../App';
import { searchOfNumber } from '../../function/filter';

export default function Header() {
    const length_pokemons = get_data().length - 1;
    const {getData, setData} = useContext(ContextPoke);
    const number_pokemon = getData[0].number.split('#')[1];

    const countPage = (pokemon_page) => {
        const count = Math.floor(pokemon_page / 29) + 1;
        return count;
    }

    const nextPrevPages = (
        props_numbers, 
        all_data_pokes, 
        props_number_pokemon, 
        props_length_poke
    ) => {
        const poke_page = parseInt(props_number_pokemon - 1)+props_numbers;
        const page_current = countPage(props_number_pokemon);
        const all_pages = countPage(props_length_poke);
        console.log(props_numbers)
        console.log(poke_page)

        if (page_current == all_pages && props_numbers > 0) return;
        if (page_current == 1 && props_numbers < 0) return;

        setData(searchOfNumber(poke_page ,all_data_pokes));
    }

    return (
        <header className='header-container'>
            <img src={logo} alt='Logo do site' />
            <div>
                <button 
                    title='Prevent' 
                    onClick={()=>nextPrevPages(-30, get_data(), number_pokemon, length_pokemons)}
                >
                    <FcPrevious />
                </button>
                <p>
                    <span>{countPage(number_pokemon)}</span>/<span>{countPage(length_pokemons)}</span>
                </p>
                <button 
                    title='Next' 
                    onClick={()=>nextPrevPages(30, get_data(), number_pokemon, length_pokemons)}
                >
                    <FcNext />
                </button>
            </div>
        </header>
    )
}
