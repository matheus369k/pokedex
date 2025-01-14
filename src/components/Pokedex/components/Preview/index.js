import React from 'react';
import './index.css';

export function Preview({ handleFinnishLoading, dataImages, dataName }) {
	return (
		<img
			onLoad={handleFinnishLoading}
			className="img_container"
			src={dataImages}
			alt={`Pokedex ${dataName}`}
		/>
	);
}
