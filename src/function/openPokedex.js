import { searchOfNumber } from "./filterOfNumber";

export const openPokedex = (propsPokedex, propsAllDataPoke, propsSetPokedex) => {
    const pokedex = isNaN(propsPokedex) ? (propsPokedex.split("#")[1]) : (propsPokedex);
    propsSetPokedex({
        status: true,
        data: searchOfNumber(pokedex, propsAllDataPoke, 1)
    });
    document.body.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};