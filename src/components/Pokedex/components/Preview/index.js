import styles from './index.module.css';

export function Preview({ handleFinnishLoading, image, name }) {
	return (
		<img
			onLoad={handleFinnishLoading}
			className={styles.poke_preview}
			src={image}
			loading='lazy'
			alt={`Pokedex ${name}`}
		/>
	);
}
