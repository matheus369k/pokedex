import React, { useContext } from 'react';
import './index.css';
import './responsive.css';
import { finnishLoadCard, searchOfNumber } from '../../function/index';
import { PokemonDataContext } from '../../context/pokemon-datas';

export function Cards() {
	const { state, handleAddSelected } = useContext(PokemonDataContext);

	function handleOpenPokedex({ number }) {
		const pokemonNumber = Number(number.split('#')[1]);
		const getPokeDataForNumber = searchOfNumber(pokemonNumber, 1)

		handleAddSelected(getPokeDataForNumber);
	}

	return (
		<ul className="pokemons_container">
			{state.data.map((element, index) => (
				// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
				<li
					onClick={() => handleOpenPokedex(element)}
					id={element.name}
					className={`pokemon-${index} card_loading`}
					key={element.name}
				>
					<img
						onLoad={() =>
							finnishLoadCard(`.pokemon-${index}`, 'card_loading', index, '.pokemons_container>li')
						}
						src={`${element.images}`}
						alt={`Pokemon: ${element.name}${element.number}`}
					/>
					<div>
						<p>
							<span>Pokedex: </span>
							{element.number}
						</p>
						<p>
							<span>Nome: </span>
							{element.name}
						</p>
					</div>
				</li>
			))}
		</ul>
	);
}
