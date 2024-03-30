import { searchOfNumber } from "./filterOfNumber";

export const openPokedex = (propsPokedex, propsAllDataPoke, propsSetPokedex) => {
    const pokedex = isNaN(propsPokedex) ?(propsPokedex.split("#")[1]):(propsPokedex);
    console.log(pokedex);
    propsSetPokedex({
        status: true,
        data: searchOfNumber(pokedex, propsAllDataPoke, 1)
    });
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};