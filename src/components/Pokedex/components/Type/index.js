import React from 'react';
import styles from './index.module.css';

export function Types(getData) {
	return (
		<ul className={styles.types_list}>
			{getData.data.map((element) => (
				<li className={styles[element.type]} key={`type-${element.type}`}>
					{element.type}
				</li>
			))}
		</ul>
	);
}
