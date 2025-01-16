import { get_data, predicted_data } from '../service/get-data';
import { setUrlState } from './index';

export const searchOfNumber = (search, max, isNotRegionFilter=true) => {
	const pokeAllData =  max > 1 && max < 5 ? predicted_data() : get_data();
	let currentPoke = Number(search) - 1;
	
	if (isNotRegionFilter && max > 1) {
		currentPoke = Array.from({ length: 31 }).map((_, index) => max * index);

		currentPoke = currentPoke.filter((data) => data + max >= Number(search))[0];
	}

	const pokemonFilter = [];
	for (let index = 0; index < max; index++) {
		if (pokeAllData[currentPoke + index] === undefined) break

		pokemonFilter.push(pokeAllData[currentPoke + index]);
	}

	return pokemonFilter;
};
