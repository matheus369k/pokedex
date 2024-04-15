import { getUrlState, setUrlState } from "../url-state";

describe("Url state", () => {
    test("Set params", () => {
        setUrlState("id", "6");

        const params = window.location.toString().search("id");

        expect(params).not.toBe(-1);
    });
    test("Get params", () => {
        expect(getUrlState("id")).toBe("6");
    });
});