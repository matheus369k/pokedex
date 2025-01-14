import React, { useContext, useState } from 'react';
import pokeboll from '../../../../assets/pokeball.png';
import { searchOfNumber } from '../../../../function/index';
import { PokemonDataContext } from '../../../../context/pokemon-datas';
import styles from './index.module.css';

export function Predicted({ getPredictedData, setPredictedData }) {
	const { handleAddSelected } = useContext(PokemonDataContext);
		const [loading, setLoading] = useState(true);
	
		function handleFinnishLoading() {
			setLoading(false);
		}

	function handleOpenPokedex({ pokedex }) {
		const pokemonNumber = Number(pokedex.split('#')[1]);
		const getPokeDataForNumber = searchOfNumber(pokemonNumber, 1);

		setPredictedData([]);
		handleAddSelected(getPokeDataForNumber);
	}

	return (
		<ul className={styles.predicted_poke_list}>
			{getPredictedData.map((element) => (
				<li
					onClick={() => handleOpenPokedex(element)}
					{...loading ? {className: styles.predicted_loading} : ''}
					key={`Predicted:${element.name} ${element.pokedex}`}
				>
					<img
						className={styles.pokemon_image}
						onLoad={handleFinnishLoading}
						src={element.images}
						alt={`Pokemon: ${element.name}`}
					/>
					<div>
						<p>{element.name}</p>
						<p>{element.pokedex}</p>
					</div>
					<img className={styles.pokeboll_image} src={pokeboll} alt="Pokeboll Icon" />
				</li>
			))}
		</ul>
	);
}
