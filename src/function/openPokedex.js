import {
    searchOfName
} from "./filterOfName";

export const openPokedex = (propsName, propsAllDataPoke, propsSetPokedex) => {
    propsSetPokedex({
        status: true,
        data: searchOfName(propsName, propsAllDataPoke, 1)
    });
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};