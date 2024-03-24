import React, { useContext, useEffect } from 'react'
import { ContextPoke } from '../../App'
import './index.css'

export default function Cards() {
    const {getData} = useContext(ContextPoke);

    const finnishLoadCard = (props_get_class, props_class_load, index) => {
        const element_card = document.querySelector(props_get_class);
        const all_elements_cards = document.querySelectorAll('.pokemons_container>li');
        element_card.classList.remove(props_class_load);

        if (all_elements_cards.length == index + 1) return;
        const element_card_in_loading = document.querySelectorAll('.card_loading');
        
        element_card_in_loading.forEach(element => {
            element.classList.remove('card_loading');
        })
    }

    useEffect(()=>{
    })
    
    return (
        <ul className='pokemons_container'>
            {
                getData.map((element, index) => (
                    <li className={`pokemon-${index} card_loading`} key={element.name}>
                        <img 
                            onLoad={()=>finnishLoadCard(`.pokemon-${index}`, 'card_loading', index)} 
                            src={`${element.images}`} 
                            alt={`Pokemon: ${element.name}${element.number}`} 
                        />
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
