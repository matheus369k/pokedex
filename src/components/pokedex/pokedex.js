import React, { useContext } from "react";
import { Evoluitons } from "./evolution/evoluitons";
import { Status } from "./status/status";
import { BasicInfor } from "./basicInfor/basic-infor";
import { PokeImg } from "./imgPoke/poke-img";
import { FcPrevious } from "react-icons/fc";
import "./index.css";
import "./responsive.css";
import { closePokedex } from "../../function/close-pokedex";

export function Pokedex({ getPokedex, setPokedex }) {
    return (
        <section>
            {
                getPokedex.data.map(element => (
                    <div
                        className="pokedex_container pokedex_loading"
                        key={"pokedex" + element.name}
                    >
                        <BasicInfor
                            dataName={element.name}
                            dataPokedex={element.number}
                            datatype={element.types}
                            dataDamage={element.superdamange}
                            dataDescription={element.description}
                        />
                        <PokeImg
                            dataImages={element.images}
                            dataName={element.name}
                        />
                        <Status
                            dataStatus={element.baseStats}
                        />
                        <Evoluitons
                            dataEvolution={element.evolution}
                            evolutinLine={element.evolutinLine}
                        />
                        <i
                            onClick={() => closePokedex(setPokedex)}
                        >
                            <FcPrevious />
                        </i>
                    </div>
                ))
            }
        </section>
    );
}