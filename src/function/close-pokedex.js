import { setUrlState } from "./url-state";

export const closePokedex = (setPokedex) => {
    setPokedex({
        status: false,
        data: []
    });
    document.body.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
    setUrlState('pokedex', 'closed');
};