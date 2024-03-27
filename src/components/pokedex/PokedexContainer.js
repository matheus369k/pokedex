import React, { useContext } from "react";
import Evoluitons from "./evolution/Evoluitons";
import Status from "./status/Status";
import BasicInfor from "./basicInfor/BasicInfor";
import PokeImg from "./imgPoke/PokeImg";
import { IoClose } from "react-icons/io5";
import "./index.css";
import { ContextPokedex } from "../../App";

export default function Pokedex(propsPoke) {
    const {setPokedex} = useContext(ContextPokedex);
    return (
        <>
            {
                propsPoke.infor.data.map(element => (
                    <div
                        className="pokedex_container"
                        key={"pokedex:"+element.name}
                    >
                        <i 
                            onClick={()=>setPokedex(
                                {
                                    status: false,
                                    data: []
                                }
                            )
                        }
                        ><IoClose /></i>
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
                        <Status data={element.baseStats} /> 
                        <Evoluitons data={element.evolution} />
                    </div>
                ))
            }; 
        </>
    );
}