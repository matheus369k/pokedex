import { Form, Predicted } from './components';
import { useState } from 'react';
import styles from './index.module.css';

export function Search() {
	const [getPredictedData, setPredictedData] = useState([]);

	return (
		<div className={styles.search_bar_container}>
			<Form setPredictedData={setPredictedData} />
			<Predicted getPredictedData={getPredictedData} setPredictedData={setPredictedData} />
		</div>
	);
}
