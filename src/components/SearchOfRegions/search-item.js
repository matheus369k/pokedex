import { useContext, useState } from 'react';
import { searchOfNumber } from '../../function';
import { PokemonDataContext } from '../../context/pokemon-datas';
import styles from './index.module.css';
import { removeUrlState } from '../../function/url-state';

export function SearchItem({ regionFilter, image, RegionName }) {
	const { handleUpdateData, handleRemoveSelected } = useContext(PokemonDataContext);
	const [loading, setLoading] = useState(true);

	function handleSetRegionFilter() {
		handleUpdateData({ search: false, data: searchOfNumber(regionFilter, 30, false) });
		removeUrlState('search');
		handleRemoveSelected();
	}

	function handleFinishLoading() {
		setLoading(false);
	}

	return (
		<li onClick={handleSetRegionFilter} {...(loading && { className: styles.search_loading_item })}>
			<img
				onLoad={handleFinishLoading}
				loading="lazy"
				src={image}
				alt={`Região de ${RegionName}`}
			/>
			<span>{RegionName}</span>
		</li>
	);
}
