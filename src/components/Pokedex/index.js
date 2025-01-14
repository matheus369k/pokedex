import { Evolutions, BasicInfo, Preview, Status } from './components';
import { PokemonDataContext } from '../../context/pokemon-datas';
import { useContext, useState } from 'react';
import { FcPrevious } from 'react-icons/fc';
import styles from './index.module.css';

export function Pokedex() {
	const { state, handleRemoveSelected } = useContext(PokemonDataContext);
	const [loading, setLoading] = useState(true);

	function handleFinnishLoading() {
		setLoading(false);
	}

	return (
		<>
			{state.selected.map((data) => (
				<div
					className={`${styles.pokedex_container} ${loading ? styles.pokedex_loading : ''}`}
					key={`pokedex${data.name}`}
				>
					<BasicInfo
						name={data.name}
						pokedex={data.number}
						types={data.types}
						superDamage={data.superDamage}
						description={data.description}
					/>
					<Preview
						handleFinnishLoading={handleFinnishLoading}
						image={data.images}
						name={data.name}
					/>
					<Status baseStatus={data.baseStats} />
					<Evolutions evolutions={data.evolution} evolutionLine={data.evolutionLine} />
					<button type="button" onClick={handleRemoveSelected}>
						<FcPrevious />
					</button>
				</div>
			))}
		</>
	);
}
