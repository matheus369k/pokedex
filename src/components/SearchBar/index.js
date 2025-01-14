import { Form, Predicted } from './components';
import React, { useState } from 'react';
import './index.css';

export function Search() {
	const [getPredictedData, setPredictedData] = useState([]);

	return (
		<div className="search-container">
			<Form setPredictedData={setPredictedData} />
			<Predicted getPredictedData={getPredictedData} setPredictedData={setPredictedData} />
		</div>
	);
}
