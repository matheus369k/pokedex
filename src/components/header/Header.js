import React, { useContext } from 'react';
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import logo from "../../assets/poke-titulo.png"
import './index.css';
import get_data from '../../service/get_data';
import { ContextPoke } from '../../App';

export default function Header() {
    const length_pokemons = get_data().length;
    const {getData} = useContext(ContextPoke);
    const number_pokemon = getData[0].number.split('#')[1];

    const countPage = (pokemon_page) => {
        const count = Math.floor(pokemon_page / 24) + 1;
        return count
    }

    return (
        <header className='header-container'>
            <img src={logo} alt='Logo do site' />
            <div>
                <button title='Prevent'><FcPrevious /></button>
                <p>
                    <span>{countPage(number_pokemon)}</span>/<span>{countPage(length_pokemons)}</span>
                </p>
                <button title='Next'><FcNext /></button>
            </div>
        </header>
    )
}
