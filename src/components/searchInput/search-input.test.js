import { render, screen } from "@testing-library/react";
import { Search } from "./search-input";
import React from "react";
import { useForm } from "react-hook-form";

jest.mock("react-hook-form");

test("Render search-input", async () => {
    const setCards = jest.fn();
    const setPokedex = jest.fn();
    const mockControl = {
        register: jest.fn(),
        handleSubmit: jest.fn(),
        watch: jest.fn()
    };
    
    useForm.mockReturnValue(mockControl);

    render(<Search
        setCards={setCards}
        setPokedex={setPokedex}
    />);

    expect(await screen.findByPlaceholderText("Search..."));
});