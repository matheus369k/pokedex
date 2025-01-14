import { get_data } from '../service/get-data';
import { setUrlState } from './index';

export const searchOfNumber = (search, max, isNotRegionFilter=true) => {
	const pokeAllData = get_data();
	let currentPoke = Number(search) - 1;
	
	if (isNotRegionFilter) {
		currentPoke = Array.from({ length: 31 }).map((_, index) => max * index);

		currentPoke = currentPoke.filter((data) => data + max >= Number(search))[0];
	}

	setUrlState('id', search);

	const pokemonFilter = [];
	for (let index = 0; index < max; index++) {
		if (pokeAllData[currentPoke + index] === undefined) {
			return pokemonFilter;
		}

		pokemonFilter.push(pokeAllData[currentPoke + index]);
	}

	return pokemonFilter;
};
