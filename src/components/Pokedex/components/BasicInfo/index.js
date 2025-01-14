import { Types } from '../Type';
import styles from './index.module.css';

export function BasicInfo({ dataName, dataPokedex, datatype, dataDamage, dataDescription }) {
	return (
		<div className={styles.basic_info}>
			<p>
				<span>Nome: </span> {dataName}
			</p>
			<p>
				<span>Pokedex: </span> {dataPokedex}
			</p>
			<div>
				<span>Tipos: </span>
				<Types data={datatype} />
			</div>
			<div>
				<span>Fraquezas: </span>
				<Types data={dataDamage} />
			</div>
			<p className={styles.description_container}>
				<span>Descrição: </span>
				{dataDescription}
			</p>
		</div>
	);
}
