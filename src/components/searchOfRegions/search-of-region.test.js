import { render } from "@testing-library/react";
import { SearchOfRegions } from "./search-of-region";

describe("Search of Region", () => {
    const setCards = jest.fn();
    const setPokedex = jest.fn();

    beforeEach(() => {
        render(<SearchOfRegions
            setCards={setCards}
            setPokedex={setPokedex}
        />);
    });

    test("Show hide legion container", () => {
        const button = document.getElementById("btn-hide-show-region");

        button.click();
        expect(document.querySelector(".hide")).toBeNull();

        button.click();
        expect(document.querySelector(".hide")).not.toBeNull();
    });
    test("clicked in the pokemon predicted", () => {
        const pokeElement = document.querySelector(".search-region-0");

        window.HTMLElement.prototype.scrollTo = jest.fn();

        pokeElement.click();
        expect(setCards).toHaveBeenCalled();
        expect(setPokedex).toHaveBeenCalled();
    });
});