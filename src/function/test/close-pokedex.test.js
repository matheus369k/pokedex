import { closePokedex } from "../close-pokedex";

test("Closed pokedex", () => {
    const setPokedex = jest.fn();
    
    window.HTMLElement.prototype.scrollTo = jest.fn();

    closePokedex(setPokedex);

    expect(setPokedex).toHaveBeenCalled();
});