import { backScrollTop, searchOfNumber, setUrlState } from "./index";

export const openPokedex = (pokedexNumber, allDataPoke, setPokedex) => {
    setPokedex({
        status: true,
        data: searchOfNumber(
            pokedexNumber, 
            allDataPoke, 
            1
        )
    });
    backScrollTop();
    setUrlState("pokedex", "open")
};