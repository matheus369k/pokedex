import React, { useContext, useState } from 'react';
import './index.css';
import './responsive.css';
import G1Img from '../../assets/Kanto-img.png';
import G2Img from '../../assets/Johto-img.png';
import G3Img from '../../assets/Hoenn-img.png';
import G4Img from '../../assets/Sinnoh-img.png';
import G5Img from '../../assets/Unova-img.png';
import G6Img from '../../assets/Kalos-img.png';
import G7Img from '../../assets/Alola-img.png';
import G8Img from '../../assets/Galar-img.png';
import { searchOfNumber, finnishLoadCard } from '../../function/index';
import { TbWorldSearch } from 'react-icons/tb';
import { PokemonDataContext } from '../../context/pokemon-datas';

export function SearchOfRegions() {
	const { handleUpdateData, handleRemoveSelected } = useContext(PokemonDataContext);
	const [showModelRegion, setShowModelRegion] = useState(false);

	const handleShowHideSearchModelRegion = () => {
		setShowModelRegion((state) => !state);
	};

	function handleSetRegionFilter(filter) {
		handleUpdateData({ search: false, data: searchOfNumber(filter, 30, false) });
		handleRemoveSelected();
	}

	return (
		<div
			id="search-region-container"
			className={`search-region-container ${showModelRegion ? '' : 'hide'}`}
		>
			<ul id="search-region" className="search-region-list">
				<li
					onClick={() => handleSetRegionFilter(1)}
					className="search-region-0 searchRegion_loading"
				>
					<img
						onLoad={() =>
							finnishLoadCard(
								'.search-region-0',
								'searchRegion_loading',
								0,
								'.search-region-list>li',
							)
						}
						src={G1Img}
						alt="Região de Kanto"
					/>
					<span>Kanto</span>
				</li>
				<li
					onClick={() => handleSetRegionFilter(152)}
					className="search-region-1 searchRegion_loading"
				>
					<img
						onLoad={() =>
							finnishLoadCard(
								'.search-region-1',
								'searchRegion_loading',
								1,
								'.search-region-list>li',
							)
						}
						src={G2Img}
						alt="Região de Johto"
					/>
					<span>Johto</span>
				</li>
				<li
					onClick={() => handleSetRegionFilter(252)}
					className="search-region-2 searchRegion_loading"
					data-pokedex="0252"
				>
					<img
						onLoad={() =>
							finnishLoadCard(
								'.search-region-2',
								'searchRegion_loading',
								2,
								'.search-region-list>li',
							)
						}
						src={G3Img}
						alt="Região de Hoenn"
					/>
					<span>Hoenn</span>
				</li>
				<li
					onClick={() => handleSetRegionFilter(387)}
					className="search-region-3 searchRegion_loading"
					data-pokedex="0387"
				>
					<img
						onLoad={() =>
							finnishLoadCard(
								'.search-region-3',
								'searchRegion_loading',
								3,
								'.search-region-list>li',
							)
						}
						src={G4Img}
						alt="Região de Sinnoh"
					/>
					<span>Sinnoh</span>
				</li>
				<li
					onClick={() => handleSetRegionFilter(495)}
					className="search-region-4 searchRegion_loading"
					data-pokedex="0495"
				>
					<img
						onLoad={() =>
							finnishLoadCard(
								'.search-region-4',
								'searchRegion_loading',
								4,
								'.search-region-list>li',
							)
						}
						src={G5Img}
						alt="Região de Unova"
					/>
					<span>Unova</span>
				</li>
				<li
					onClick={() => handleSetRegionFilter(650)}
					className="search-region-5 searchRegion_loading"
					data-pokedex="0650"
				>
					<img
						onLoad={() =>
							finnishLoadCard(
								'.search-region-5',
								'searchRegion_loading',
								5,
								'.search-region-list>li',
							)
						}
						src={G6Img}
						alt="Região de Kalos"
					/>
					<span>Kalos</span>
				</li>
				<li
					onClick={() => handleSetRegionFilter(722)}
					className="search-region-6 searchRegion_loading"
					data-pokedex="0722"
				>
					<img
						onLoad={() =>
							finnishLoadCard(
								'.search-region-6',
								'searchRegion_loading',
								6,
								'.search-region-list>li',
							)
						}
						src={G7Img}
						alt="Região de Alola"
					/>
					<span>Alola</span>
				</li>
				<li
					onClick={() => handleSetRegionFilter(810)}
					className="search-region-7 searchRegion_loading"
					data-pokedex="0810"
				>
					<img
						onLoad={() =>
							finnishLoadCard(
								'.search-region-7',
								'searchRegion_loading',
								7,
								'.search-region-list>li',
							)
						}
						src={G8Img}
						alt="Região de Galar"
					/>
					<span>Galar</span>
				</li>
			</ul>
			<button
				id="btn-hide-show-region"
				onClick={handleShowHideSearchModelRegion}
				className="btn-hide-show-search-region"
				title="Selecionar por região"
			>
				<TbWorldSearch />
				<span>Regiões</span>
			</button>
		</div>
	);
}
