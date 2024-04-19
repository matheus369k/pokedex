import { setUrlState } from "./index";

export const searchOfNumber = (search, pokemonAll, numberAllGet) => {
    let page = parseInt(search) - 1;

    if (typeof search === "number" && numberAllGet > 1) {
        page = Array.from({ length: 31 }).map((_, index) => numberAllGet * index);

        page = page.filter(page => page + numberAllGet >= parseInt(search))[0];
    }

    setUrlState("id", search);

    const pokemonFilter = [];
    for (let index = 0; index < numberAllGet; index++) {
        if (pokemonAll[page + index] == undefined) {
            return pokemonFilter;
        }

        pokemonFilter.push(pokemonAll[page + index]);
    }
    return pokemonFilter;
};