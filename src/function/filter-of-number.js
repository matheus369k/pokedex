import { setUrlState } from "./url-state";

export const searchOfNumber = (search, pokemonAll, numberAllGet) => {
    setUrlState('id', parseInt(search));
    const pokemonFilter = [];
    for (let index = 0; index < numberAllGet; index++) {
        if (pokemonAll[parseInt(search) + index - 1] == undefined) {
            return pokemonFilter;
        }

        pokemonFilter.push(pokemonAll[parseInt(search) + index - 1]);
    }
    return pokemonFilter;
};