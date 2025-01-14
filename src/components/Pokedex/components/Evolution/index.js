import React from 'react';
import styles from './index.module.css';

export function Evolutions({ dataEvolution, evolutionLine }) {
	return (
		<div className={styles.evolutions_container}>
			<h1 className={styles.evolutions_title}>Evoluções:</h1>
			<ul className={`${styles.evolution_list} ${styles[`evolution_line_${evolutionLine}`]}`}>
				{dataEvolution.map((element, index) => (
					<li
						className={`${styles.evolution_item} ${styles[`evo_${index + 1}`]}`}
						key={`evolution-${element.name}`}
					>
						<img src={element.img} alt={`evolution-${element.name}`} />
						{element.Lv !== '+' && (
							<p>
								{typeof element.Lv === 'number' && <span>level </span>}
								{element.Lv}
							</p>
						)}
						<p>{element.name}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
