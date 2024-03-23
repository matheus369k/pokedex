import React, { useContext } from 'react'
import { ContextPoke } from '../../App'
import './index.css'

export default function Cards() {
    const {getData} = useContext(ContextPoke);
    
    return (
        <ul className='pokemons_container'>
            {
                getData.map(element => (
                    <li key={element.name}>
                        <img src={`${element.images}`} alt={`Pokemon: ${element.name}${element.number}`} />
                        <div>
                            <p><span>Pokedex: </span>{element.number}</p>
                            <p><span>Nome: </span>{element.name}</p>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}
