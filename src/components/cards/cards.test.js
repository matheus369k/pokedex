/* eslint-disable no-undef */
import {
  render
} from "@testing-library/react";
import { Cards } from "./cards";
import React from "react";
import {
  screen
} from "@testing-library/dom";

test("Render of cards", async () => {
  const getCards = {
    search: false,
    data: [{
      "name": "Bulbasaur",
      "number": "#0001",
      "images": "./poke-png-G1/001.png"
    }]
  };

  const setCards = jest.fn();

  render(<Cards getCards={getCards} setCards={setCards}/>);

  const img = document.querySelector("img");

  expect(await screen.findByText("Bulbasaur"));
  expect(await screen.findByText("#0001"));
  expect(img.getAttribute("src")).toBe("./poke-png-G1/001.png");
});