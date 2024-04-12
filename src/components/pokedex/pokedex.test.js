import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { Pokedex } from "./pokedex"

test("Render Pokedex", async () => {
  const getdata = [
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
  ];

  const setPokedex = jest.fn();
  const getPokedex = { status: true, data: getdata };

  render(<Pokedex
    getPokedex={getPokedex}
    setPokedex={setPokedex}
  />);

  expect(screen.getAllByText("Bulbasaur")).toHaveLength(2);
  expect(screen.getAllByRole("img")).toHaveLength(4);

  expect(await screen.findByText("Pokedex:"));
  expect(await screen.findByText("Status:"));
  expect(await screen.findByText("Evoluções:"));
  expect(await screen.findByText("Grama"));
})