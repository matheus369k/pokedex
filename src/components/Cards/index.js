import { useContext, useState } from 'react';
import { searchOfNumber } from '../../function/index';
import { PokemonDataContext } from '../../context/pokemon-datas';
import styles from './index.module.css';

export function Cards() {
	const { state, handleAddSelected } = useContext(PokemonDataContext);
	const [loading, setLoading] = useState(true);

	function handleFinnishLoading() {
		setLoading(false);
	}

	function handleOpenPokedex({ number }) {
		const pokemonNumber = Number(number.split('#')[1]);
		const getPokeDataForNumber = searchOfNumber(pokemonNumber, 1);

		handleAddSelected(getPokeDataForNumber);
	}

	return (
		<ul className={styles.pokemon_card_list}>
			{state.data.map((element) => {
				return (
					<li
						onClick={() => handleOpenPokedex(element)}
						{...(loading ? { className: styles.card_loading } : '')}
						key={element.name}
					>
						<img
							onLoad={handleFinnishLoading}
							src={element.images}
							loading='lazy'
							alt={`Pokemon: ${element.name}-${element.number}`}
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
				);
			})}
		</ul>
	);
}
