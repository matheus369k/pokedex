import { Types } from '../Type';
import styles from './index.module.css';

export function BasicInfo({ name, pokedex, types, superDamage, description }) {
	return (
		<div className={styles.basic_info}>
			<p>
				<span>Nome: </span> {name}
			</p>
			<p>
				<span>Pokedex: </span> {pokedex}
			</p>
			<div>
				<span>Tipos: </span>
				<Types data={types} />
			</div>
			<div>
				<span>Fraquezas: </span>
				<Types data={superDamage} />
			</div>
			<p className={styles.description_container}>
				<span>Descrição: </span>
				{description}
			</p>
		</div>
	);
}
