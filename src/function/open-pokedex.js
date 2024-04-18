import { searchOfNumber } from "./filter-of-number";
import { setUrlState } from "./url-state";

export const openPokedex = (pokedexNumber, allDataPoke, setPokedex) => {
    const pokedex = Number(pokedexNumber) ? pokedexNumber : pokedexNumber.split("#")[1];
    
    setPokedex({
        status: true,
        data: searchOfNumber(
            pokedex, 
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