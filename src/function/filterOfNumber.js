export const searchOfNumber = (search, pokemons_all, number_all_get) => {
    const pokemons_filter = [];
    for (let index = 0; index < number_all_get; index++) {
        if (pokemons_all[parseInt(search) + index - 1] == undefined) {
            return pokemons_filter;
        }

        pokemons_filter.push(pokemons_all[parseInt(search) + index - 1]);
    }
    return pokemons_filter;
};