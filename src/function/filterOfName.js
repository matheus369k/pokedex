export const searchOfName = (search, pokemons_all, numberAllGet) => {
    const pokemons_filter = [];
    pokemons_all.filter(element => {
        const search_length = search.split("").length;
        const name_poke = element.name.slice(0, search_length).toLowerCase();

        if (pokemons_filter.length > numberAllGet || element == undefined) return;
        if (name_poke == search.toLowerCase()) pokemons_filter.push(element);
    });
    return pokemons_filter;
};
