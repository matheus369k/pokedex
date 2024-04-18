import { render, screen } from "@testing-library/react";
import { Status } from "./status";

test("Render status component", async () => {
    const statusData = {
        "baseStats": {
            "HP": 45,
            "Atack": 49,
            "Defense": 49,
            "Sp.atack": 65,
            "Sp.Def": 65,
            "Speed": 45
    }};

    render(<Status 
        dataStatus={statusData.baseStats}
    />);

    expect(await screen.findAllByText("45")).toHaveLength(2);
    expect(await screen.findAllByText("49")).toHaveLength(2);
    expect(await screen.findAllByText("65")).toHaveLength(2);
});