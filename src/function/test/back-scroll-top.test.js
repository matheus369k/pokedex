import { backScrollTop } from "../index";

test("Back scroll top", () => {
    window.HTMLElement.prototype.scrollTo = jest.fn();

    backScrollTop();

    expect(document.body.scrollTo).toHaveBeenCalled();
});