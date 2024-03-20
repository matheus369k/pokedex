import React from 'react';
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import logo from "../../assets/poke-titulo.png"
import './index.css';

export default function Header() {
    return (
        <header className='header-container'>
            <img src={logo} alt='Logo do site' />
            <div>
                <button title='Prevent'><FcPrevious /></button>
                <button title='Next'><FcNext /></button>
            </div>
        </header>
    )
}
