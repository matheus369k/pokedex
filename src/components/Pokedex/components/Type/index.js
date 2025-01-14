import React from 'react';
import styles from './index.module.css';

export function Types(getData) {
	return (
		<ul className={styles.types_list}>
			{getData.data.map((data) => (
				<li className={styles[data.type]} key={`type-${data.type}`}>
					{data.type}
				</li>
			))}
		</ul>
	);
}
