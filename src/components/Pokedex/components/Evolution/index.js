import React from 'react';
import styles from './index.module.css';

export function Evolutions({ evolutions, evolutionLine }) {
	return (
		<div className={styles.evolutions_container}>
			<h1 className={styles.evolutions_title}>Evoluções:</h1>
			<ul className={`${styles.evolution_list} ${styles[`evolution_line_${evolutionLine}`]}`}>
				{evolutions.map((data, index) => (
					<li
						className={`${styles.evolution_item} ${styles[`evo_${index + 1}`]}`}
						key={`evolution-${data.name}`}
					>
						<img loading='lazy' src={data.img} alt={`evolution-${data.name}`} />
						{data.Lv !== '+' && (
							<p>
								{typeof data.Lv === 'number' && <span>level </span>}
								{data.Lv}
							</p>
						)}
						<p>{data.name}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
