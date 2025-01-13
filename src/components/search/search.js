import React, { useState } from 'react';
import './index.css';
import { Predicted } from './predicted/predicted';
import { Form } from './form/form';

export function Search() {
	const [getPredictedData, setPredictedData] = useState([]);

	return (
		<div className="search-container">
			<Form setPredictedData={setPredictedData} />
			<Predicted getPredictedData={getPredictedData} setPredictedData={setPredictedData} />
		</div>
	);
}
