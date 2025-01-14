import React from 'react';
import { Types } from '../Type';
import './index.css';

export function BasicInfo(getData) {
	return (
		<div className="basic_infor">
			<p>
				<span>Nome: </span> {getData.dataName}
			</p>
			<p>
				<span>Pokedex: </span> {getData.dataPokedex}
			</p>
			<div>
				<span>Tipos: </span>
				<Types data={getData.datatype} />
			</div>
			<div>
				<span>Fraquezas: </span>
				<Types data={getData.dataDamage} />
			</div>
			<p className="description_container">
				<span>Descrição: </span>
				{getData.dataDescription}
			</p>
		</div>
	);
}
