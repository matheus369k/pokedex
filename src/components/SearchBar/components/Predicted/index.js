import React, { useContext, useState } from 'react';
import pokeboll from '../../../../assets/pokeball.png';
import { searchOfName, searchOfNumber } from '../../../../function/index';
import { PokemonDataContext } from '../../../../context/pokemon-datas';
import styles from './index.module.css';
import { useFormContext } from 'react-hook-form';

export function Predicted() {
	const { handleAddSelected } = useContext(PokemonDataContext);
	const { watch, control: {_defaultValues, } } = useFormContext();
	const [loading, setLoading] = useState(true);
	const [predictedData, setPredictedData] = useState([]);

	function handleFinnishLoading() {
		setLoading(false);
	}

	function handleOpenPokedex({ pokedex }) {
		const pokemonNumber = Number(pokedex.split('#')[1]);
		const getPokeDataForNumber = searchOfNumber(pokemonNumber, 1);

		handleAddSelected(getPokeDataForNumber);
		setPredictedData([]);
	}

	watch((data) => {
		if (!data.search) {
			setPredictedData([]);
			return
		};

		if (Number(data.search)) {
			setPredictedData(searchOfNumber(data.search, 3));
			return;
		}

		setPredictedData(searchOfName(data.search, 2));
	});

	return (
		<ul className={styles.predicted_poke_list}>
			{predictedData.map((data) => (
				<li
					onClick={() => handleOpenPokedex(data)}
					{...(loading ? { className: styles.predicted_loading } : '')}
					key={`Predicted:${data.name} ${data.pokedex}`}
				>
					<img
						className={styles.pokemon_image}
						onLoad={handleFinnishLoading}
						src={data.images}
						loading="lazy"
						alt={`Pokemon: ${data.name}`}
					/>
					<div>
						<p>{data.name}</p>
						<p>{data.pokedex}</p>
					</div>
					<img className={styles.pokeboll_image} src={pokeboll} alt="Pokeboll Icon" />
				</li>
			))}
		</ul>
	);
}
