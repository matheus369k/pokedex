import React, { useContext } from "react";
import Evoluitons from "./evolution/Evoluitons";
import Status from "./status/Status";
import BasicInfor from "./basicInfor/BasicInfor";
import PokeImg from "./imgPoke/PokeImg";
import { FcPrevious } from "react-icons/fc";
import "./index.css";
import { ContextPokedex } from "../../App";

export default function Pokedex(propsPoke) {
    const {setPokedex} = useContext(ContextPokedex);
    const closePokedex = () => {
        setPokedex({
            status: false,
            data: []
        });
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    };
    return (
        <>
            {
                propsPoke.infor.data.map(element => (
                    <div
                        className="pokedex_container pokedex_loading"
                        key={"pokedex:"+element.name}
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
                        <Status data={element.baseStats}/> 
                        <Evoluitons data={element.evolution} evolutinLine={element.evolutinLine}/>
                        <i 
                            onClick={()=>closePokedex()}
                        ><FcPrevious /></i>
                    </div>
                ))
            }; 
        </>
    );
}