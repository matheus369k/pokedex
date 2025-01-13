import { setUrlState } from './index';

export const searchOfName = (search, pokemonAll, numberAllGet) => {
	const pokemonFilter = [];

	setUrlState('id', search);
	
	pokemonAll.filter((element) => {
		const searchLength = search.split('').length;
		const namePoke = element.name.slice(0, searchLength).toLowerCase();

		if (pokemonFilter.length > numberAllGet || element === undefined) return;
		if (namePoke === search.toLowerCase()) pokemonFilter.push(element);
	});
	
	return pokemonFilter;
};
