import { render, screen } from "@testing-library/react"
import { Header } from "./header"
import React from "react";

describe("Header", () => {
  const dataCards = Array.from({ length: 30 }).map(() => ({
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
  const dataPokedex = [{
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

  window.HTMLElement.prototype.scrollTo = jest.fn();
  const setCards = jest.fn();
  const setPokedex = jest.fn();

  test("Render header on cards", async () => {
    const getPokedex = { status: false, data: [] };
    const getCards = { search: false, data: dataCards };

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
    const getCards = { search: false, data: dataCards };

    render(<Header
      getCards={getCards}
      setCards={setCards}
      getPokedex={getPokedex}
      setPokedex={setPokedex}
    />);

    expect(screen.getByText(905));
    expect(screen.getByText(1));
  });
  test("Render header on cards with search", () => {
    const getPokedex = { status: false, data: [] };
    const getCards = { search: true, data: dataCards };

    render(<Header
      getCards={getCards}
      setCards={setCards}
      getPokedex={getPokedex}
      setPokedex={setPokedex}
    />);

    expect(screen.getAllByText(1).length).toBe(2);
  });
  test("clicked Next/Previous in cards", () => {
    const dataNextPrevCard = [{
      "name": "Nidoqueen",
      "number": "#0031",
      "types": [
        {
          "type": "Veneno"
        },
        {
          "type": "Terra"
        }
      ],
      "images": "./poke-png-G1/031.png",
      "evolutinLine": 111,
      "evolution": [
        {
          "name": "Nidoran♀",
          "Lv": 1,
          "img": "./poke-png-G1/029.png"
        },
        {
          "name": "Nidorina",
          "Lv": 16,
          "img": "./poke-png-G1/030.png"
        },
        {
          "name": "Nidoqueen",
          "Lv": "Moon Stone",
          "img": "./poke-png-G1/031.png"
        }
      ],
      "superdamange": [
        {
          "type": "Agua"
        },
        {
          "type": "Gelo"
        },
        {
          "type": "Terra"
        },
        {
          "type": "Pisquico"
        }
      ],
      "baseStats": {
        "HP": 90,
        "Atack": 92,
        "Defense": 87,
        "Sp.atack": 75,
        "Sp.Def": 85,
        "Speed": 76
      },
      "description": "O corpo é coberto por escamas rígidas semelhantes a agulhas. Se ficar excitado, as agulhas eriçam-se para fora. As suas escamas duras proporcionam uma forte proteção. Ele usa seu volume pesado para executar movimentos poderosos."
    }];

    const getPokedex = { status: false, data: [] };
    const getCards = { search: false, data: dataNextPrevCard };

    render(<Header
      getCards={getCards}
      setCards={setCards}
      getPokedex={getPokedex}
      setPokedex={setPokedex}
    />);

    const btnPrevent = document.getElementById("btn-prevent");
    const btnNext = document.getElementById("btn-next");

    btnNext.click();
    btnPrevent.click();

    expect(setCards).toBeCalledTimes(2);
  });
  test("clicked Next/Previous in Pokedex", () => {
    const dataNextPrevCard = [{
      "name": "Nidoqueen",
      "number": "#0031",
      "types": [
        {
          "type": "Veneno"
        },
        {
          "type": "Terra"
        }
      ],
      "images": "./poke-png-G1/031.png",
      "evolutinLine": 111,
      "evolution": [
        {
          "name": "Nidoran♀",
          "Lv": 1,
          "img": "./poke-png-G1/029.png"
        },
        {
          "name": "Nidorina",
          "Lv": 16,
          "img": "./poke-png-G1/030.png"
        },
        {
          "name": "Nidoqueen",
          "Lv": "Moon Stone",
          "img": "./poke-png-G1/031.png"
        }
      ],
      "superdamange": [
        {
          "type": "Agua"
        },
        {
          "type": "Gelo"
        },
        {
          "type": "Terra"
        },
        {
          "type": "Pisquico"
        }
      ],
      "baseStats": {
        "HP": 90,
        "Atack": 92,
        "Defense": 87,
        "Sp.atack": 75,
        "Sp.Def": 85,
        "Speed": 76
      },
      "description": "O corpo é coberto por escamas rígidas semelhantes a agulhas. Se ficar excitado, as agulhas eriçam-se para fora. As suas escamas duras proporcionam uma forte proteção. Ele usa seu volume pesado para executar movimentos poderosos."
    }];

    const getPokedex = { status: true, data: dataNextPrevCard };
    const getCards = { search: false, data: [] };

    render(<Header
      getCards={getCards}
      setCards={setCards}
      getPokedex={getPokedex}
      setPokedex={setPokedex}
    />);

    const btnPrevent = document.getElementById("btn-prevent");
    const btnNext = document.getElementById("btn-next");

    btnNext.click();
    btnPrevent.click();

    expect(setPokedex).toHaveBeenCalledTimes(2)
  })
});