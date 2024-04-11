import { render, screen } from "@testing-library/react"
import { Header } from "./header"
import React from "react";

describe("Header", () => {
    const dataCard = Array.from({ length: 30 }).map(() => (
        {
            "name": "Bulbasaur",
            "number": "#0001",
            "types": [
                {
                    "type": "Grama"
                },
                {
                    "type": "Veneno"
                }
            ],
            "images": "./poke-png-G1/001.png",
            "evolutinLine": 111,
            "evolution": [
                {
                    "name": "Bulbasaur",
                    "Lv": 1,
                    "img": "./poke-png-G1/001.png"
                },
                {
                    "name": "Ivysaur",
                    "Lv": 16,
                    "img": "./poke-png-G1/002.png"
                },
                {
                    "name": "Venusaur",
                    "Lv": 32,
                    "img": "./poke-png-G1/003.png"
                }
            ],
            "superdamange": [
                {
                    "type": "Fogo"
                },
                {
                    "type": "Gelo"
                },
                {
                    "type": "Pisquico"
                },
                {
                    "type": "Voador"
                }
            ],
            "baseStats": {
                "HP": 45,
                "Atack": 49,
                "Defense": 49,
                "Sp.atack": 65,
                "Sp.Def": 65,
                "Speed": 45
            },
            "description": "Uma estranha semente foi plantada em suas costas em seu nascimento. A planta brota e cresce com este Pokémon. Por algum tempo depois de seu nascimento, cresce ganhando nutrição da semente em suas costas."

        }
    ));
    const dataPokedex = [
        {
          "name": "Bulbasaur",
          "number": "#0001",
          "types": [
            {
              "type": "Grama"
            },
            {
              "type": "Veneno"
            }
          ],
          "images": "./poke-png-G1/001.png",
          "evolutinLine": 111,
          "evolution": [
            {
              "name": "Bulbasaur",
              "Lv": 1,
              "img": "./poke-png-G1/001.png"
            },
            {
              "name": "Ivysaur",
              "Lv": 16,
              "img": "./poke-png-G1/002.png"
            },
            {
              "name": "Venusaur",
              "Lv": 32,
              "img": "./poke-png-G1/003.png"
            }
          ],
          "superdamange": [
            {
              "type": "Fogo"
            },
            {
              "type": "Gelo"
            },
            {
              "type": "Pisquico"
            },
            {
              "type": "Voador"
            }
          ],
          "baseStats": {
            "HP": 45,
            "Atack": 49,
            "Defense": 49,
            "Sp.atack": 65,
            "Sp.Def": 65,
            "Speed": 45
          },
          "description": "Uma estranha semente foi plantada em suas costas em seu nascimento. A planta brota e cresce com este Pokémon. Por algum tempo depois de seu nascimento, cresce ganhando nutrição da semente em suas costas."
    }];

    const setCards = jest.fn();
    const setPokedex = jest.fn();

    test("Render header on cards", async () => {
        const getPokedex = { status: false, data: [] };
        const getCards = { search: false, data: dataCard };

        render(<Header
            getCards={getCards}
            setCards={setCards}
            getPokedex={getPokedex}
            setPokedex={setPokedex}
        />);

        expect((await screen.findAllByRole("button")).length).toBe(2);
        expect(screen.getByText(31));
        expect(screen.getByText(1));
    });
    test("Render header on pokedex", () => {
        const getPokedex = { status: true, data: dataPokedex };
        const getCards = { search: false, data: dataCard };

        render(<Header
            getCards={getCards}
            setCards={setCards}
            getPokedex={getPokedex}
            setPokedex={setPokedex}
        />);

        expect(screen.getByText(905));
        expect(screen.getByText(1));
    });
    test("Render header on cards with search", async () => {
        const getPokedex = { status: false, data: [] };
        const getCards = { search: true, data: dataCard };

        render(<Header
            getCards={getCards}
            setCards={setCards}
            getPokedex={getPokedex}
            setPokedex={setPokedex}
        />);

        expect(screen.getAllByText(1).length).toBe(2);
    });
});