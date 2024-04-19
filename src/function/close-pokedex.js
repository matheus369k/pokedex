import { backScrollTop, setUrlState } from "./index";

export const closePokedex = (setPokedex) => {
    setPokedex({
        status: false,
        data: []
    });
    backScrollTop();
    setUrlState("pokedex", "closed");
};