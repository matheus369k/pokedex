import { render, screen } from "@testing-library/react";
import { Search } from "../search";
import React from "react";
import { useForm } from "react-hook-form";

jest.mock("react-hook-form");

test("Render search-input", async () => {
    const setCards = jest.fn();
    const setPokedex = jest.fn();
    const setPredictedData = jest.fn();
    const mockControl = {
        register: jest.fn(),
        handleSubmit: jest.fn(),
        watch: jest.fn()
    };
    
    useForm.mockReturnValue(mockControl);

    render(<Search
        setPredictedData={setPredictedData}
        setPokedex={setPokedex}
        setCards={setCards}
    />);

    expect(await screen.findByPlaceholderText("Search..."));
});