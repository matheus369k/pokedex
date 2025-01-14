import styles from './index.module.css';

export function Preview({ handleFinnishLoading, dataImages, dataName }) {
	return (
		<img
			onLoad={handleFinnishLoading}
			className={styles.poke_preview}
			src={dataImages}
			alt={`Pokedex ${dataName}`}
		/>
	);
}
