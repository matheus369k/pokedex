import { get_data, predicted_data } from '../service/get-data';
import { setUrlState } from './index';

export const searchOfName = (search, max) => {
	const pokeAllData = max > 1 && max < 5 ? predicted_data() : get_data();
	const pokemonFilter = [];

	for (let index = 0; index < pokeAllData.length; index++) {
		const searchLength = search.split('').length;
		const namePoke = pokeAllData[index].name.slice(0, searchLength).toLowerCase();

		if (pokemonFilter.length > max || pokeAllData[index] === undefined) break;
		if (namePoke !== search.toLowerCase()) continue
			
		pokemonFilter.push(pokeAllData[index]);
	}

	return pokemonFilter;
};
