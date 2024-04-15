import { finnishLoadCard } from "../finnish-load";

describe("Finnish load", () => {
    beforeEach(()=>{
        document.body.innerHTML = 
        "<ul>"+
            "<li class='pokemon-0 loading'></li>"+
            "<li class='pokemon-1 loading'></li>"+
            "<li class='pokemon-2 loading'></li>"+
        "</ul>";
    })
    test("Remove normal class element", () => {    
        finnishLoadCard(".pokemon-0", "loading", 0,"ul>li");

        expect(document.querySelector(".pokemon-0").classList).not.toContain("loading");
    });
    test("Remove all of search and reload", () => {
        finnishLoadCard(".pokemon-2", "loading", 2,"ul>li");

        expect(document.querySelectorAll(".loading")).toHaveLength(0);
    });
    test("Remove one of search and reload", () => {
        finnishLoadCard(".pokemon-1", "loading", 1,"ul>li");

        expect(document.querySelectorAll(".loading")).toHaveLength(2);
    });
});