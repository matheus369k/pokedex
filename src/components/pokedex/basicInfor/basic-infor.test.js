import { render, screen } from "@testing-library/react";
import { BasicInfor } from "./basic-infor";

test("Render component basic-infor", async () => {
    const basicInforData = {
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
          "description": "Uma estranha semente foi plantada em suas costas em seu nascimento. A planta brota e cresce com este Pokémon. Por algum tempo depois de seu nascimento, cresce ganhando nutrição da semente em suas costas."
    };

    render(<BasicInfor 
        dataName={basicInforData.name}
        dataPokedex={basicInforData.number}
        datatype={basicInforData.types}
        dataDamage={basicInforData.superdamange}
        dataDescription={basicInforData.description}
    />);

    expect(await screen.findByText(basicInforData.name));
    expect(await screen.findByText(basicInforData.number));
    expect(await screen.findByText(basicInforData.types[0].type));
    expect(await screen.findByText(basicInforData.superdamange[0].type));
    expect(await screen.findByText(basicInforData.description));
});