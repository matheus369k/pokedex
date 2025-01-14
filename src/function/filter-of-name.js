import { setUrlState } from './index';

export const searchOfName = (search, max) => {
	const pokeAllData = get_data();
	const pokemonFilter = [];

	setUrlState('id', search);
	
	pokeAllData.filter((element) => {
		const searchLength = search.split('').length;
		const namePoke = element.name.slice(0, searchLength).toLowerCase();

		if (pokemonFilter.length > max || element === undefined) return;
		if (namePoke === search.toLowerCase()) pokemonFilter.push(element);
	});
	
	return pokemonFilter;
};
