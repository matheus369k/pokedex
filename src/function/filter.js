export const searchOfNumber = (search, pokemons_all, numberAllGet) => {
    const pokemons_filter = [];
    for (let index = 0; index < numberAllGet; index++) {
        if (pokemons_all[parseInt(search) + index] == undefined){ 
            return pokemons_filter;
        }

        pokemons_filter.push(pokemons_all[parseInt(search) + index]);
    }
    return pokemons_filter;
};