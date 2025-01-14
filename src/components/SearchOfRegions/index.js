import React, { useState } from 'react';
import G1Img from '../../assets/Kanto-img.png';
import G2Img from '../../assets/Johto-img.png';
import G3Img from '../../assets/Hoenn-img.png';
import G4Img from '../../assets/Sinnoh-img.png';
import G5Img from '../../assets/Unova-img.png';
import G6Img from '../../assets/Kalos-img.png';
import G7Img from '../../assets/Alola-img.png';
import G8Img from '../../assets/Galar-img.png';
import { TbWorldSearch } from 'react-icons/tb';
import { SearchItem } from './search-item';
import styles from './index.module.css';

export function SearchOfRegions() {
	const [showModelRegion, setShowModelRegion] = useState(false);

	const handleShowHideSearchModelRegion = () => {
		setShowModelRegion((state) => !state);
	};

	return (
		<div className={`${styles.search_region_container} ${showModelRegion ? '' : styles.hidden}`}>
			<ul className={styles.search_region_list}>
				<SearchItem image={G1Img} regionFilter={1} RegionName="Kanto" />
				<SearchItem image={G2Img} regionFilter={152} RegionName="Johto" />
				<SearchItem image={G3Img} regionFilter={252} RegionName="Hoenn" />
				<SearchItem image={G4Img} regionFilter={387} RegionName="Sinnoh" />
				<SearchItem image={G5Img} regionFilter={495} RegionName="Unova" />
				<SearchItem image={G6Img} regionFilter={650} RegionName="Kalos" />
				<SearchItem image={G7Img} regionFilter={722} RegionName="Alola" />
				<SearchItem image={G8Img} regionFilter={810} RegionName="Galar" />
			</ul>
			<button
				type="button"
				onClick={handleShowHideSearchModelRegion}
				className={styles.search_toggle_model}
				title="Selecionar por região"
			>
				<TbWorldSearch />
				<span>Regiões</span>
			</button>
		</div>
	);
}
