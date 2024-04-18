import { render, screen } from "@testing-library/react";
import { Types } from "./types";

test("Render type component ", async () => {
    const typeData = {
        "types": [
          {
            "type": "Grama"
          },
          {
            "type": "Veneno"
          }
    ]};

    render(<Types  data={typeData.types}/>);

    expect(await screen.findByText("Grama"));
    expect(await screen.findByText("Veneno"));
});