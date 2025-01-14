import React, { useContext } from 'react';
import './index.css';
import pokeboll from '../../../assets/pokeball.png';
import { finnishLoadCard, searchOfNumber } from '../../../function/index';
import { PokemonDataContext } from '../../../context/pokemon-datas';

export function Predicted({ getPredictedData, setPredictedData }) {
	const { handleAddSelected } = useContext(PokemonDataContext);

	document.addEventListener('click', () => {
		const elementClicking = event.composedPath();

		if (getPredictedData.length === 0) return;

		if (elementClicking[0]?.classList?.contains('form_container')) return;
		if (elementClicking[1]?.classList?.contains('form_container')) return;
		if (elementClicking[2]?.classList?.contains('form_container')) return;
		if (elementClicking[3]?.classList?.contains('form_container')) return;

		setPredictedData([]);
		event.stopImmediatePropagation();
	});

	function handleOpenPokedex({ pokedex }) {
		const pokemonNumber = Number(pokedex.split('#')[1]);
		const getPokeDataForNumber = searchOfNumber(pokemonNumber, 1);

		handleAddSelected(getPokeDataForNumber);
	}

	return (
		<ul className="Predicted_poke_container">
			{getPredictedData.map((element, index) => (
				// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
				<li
					onClick={() => handleOpenPokedex(element)}
					className={`predictedPoke-${index} Predicted_loading`}
					key={`Predicted:${element.name}${element.pokedex}`}
				>
					<img
						className="pokemon-image"
						onLoad={() =>
							finnishLoadCard(
								`.predictedPoke-${index}`,
								'Predicted_loading',
								index,
								'.Predicted-poke-container>li',
							)
						}
						src={element.images}
						alt={`Pokemon:${element.name}`}
					/>
					<div>
						<p>{element.name}</p>
						<p>{element.pokedex}</p>
					</div>
					<img className="pokeboll-image" src={pokeboll} alt="Pokeboll Icon" />
				</li>
			))}
		</ul>
	);
}
