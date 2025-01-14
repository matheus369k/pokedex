import { Evolutions, BasicInfo, Preview, Status } from './components';
import { PokemonDataContext } from '../../context/pokemon-datas';
import { useContext, useState } from 'react';
import { FcPrevious } from 'react-icons/fc';
import './index.css';
import './responsive.css';

export function Pokedex() {
	const { state, handleRemoveSelected } = useContext(PokemonDataContext);
	const [loading, setLoading] = useState(true);

	function handleFinnishLoading() {
		setLoading(false);
	}

	return (
		<>
			{state.selected.map((element) => (
				<div
					className={`pokedex_container ${loading ? 'pokedex_loading' : ''}`}
					key={`pokedex${element.name}`}
				>
					<BasicInfo
						dataName={element.name}
						dataPokedex={element.number}
						datatype={element.types}
						dataDamage={element.superdamange}
						dataDescription={element.description}
					/>
					<Preview
						handleFinnishLoading={handleFinnishLoading}
						dataImages={element.images}
						dataName={element.name}
					/>
					<Status dataStatus={element.baseStats} />
					<Evolutions dataEvolution={element.evolution} evolutinLine={element.evolutinLine} />
					<button type="button" onClick={handleRemoveSelected}>
						<FcPrevious />
					</button>
				</div>
			))}
		</>
	);
}
