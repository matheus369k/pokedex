import React, { useContext } from 'react';
import pokeboll from '../../../../assets/pokeball.png';
import { finnishLoadCard, searchOfNumber } from '../../../../function/index';
import { PokemonDataContext } from '../../../../context/pokemon-datas';
import './index.css';

export function Predicted({ getPredictedData, setPredictedData }) {
	const { handleAddSelected } = useContext(PokemonDataContext);

	function handleOpenPokedex({ pokedex }) {
		const pokemonNumber = Number(pokedex.split('#')[1]);
		const getPokeDataForNumber = searchOfNumber(pokemonNumber, 1);

		setPredictedData([])
		handleAddSelected(getPokeDataForNumber);
	}

	return (
		<ul className="Predicted_poke_container">
			{getPredictedData.map((element, index) => (
				// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
				<li
					onClick={() => handleOpenPokedex(element)}
					className={`predictedPoke-${index} Predicted_loading`}
					key={`Predicted:${element.name} ${element.pokedex}`}
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
