import { searchOfNumber } from "./filter-of-number";
import { setUrlState } from "./url-state";

export const openPokedex = (pokedexNumber, allDataPoke, setPokedex) => {
    setPokedex({
        status: true,
        data: searchOfNumber(
            pokedexNumber, 
            allDataPoke, 
            1
        )
    });
    document.body.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });

    setUrlState('pokedex', 'open')
};