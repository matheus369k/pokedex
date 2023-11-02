import axios from "axios"
import { useEffect, useState } from "react";
import style  from "../pages/Cards.module.css"
import {AiFillCloseCircle} from "react-icons/ai"
import BarSeach from "./BarSeach";

function ManipulationAPI(props){
    const [cards, setCards]=useState([])

    axios(props.api)
    .then((resp)=> {
        //console.log(resp.data["land_orange"]);
        setCards(resp.data["land_orange"])
        
    }).catch((err)=> console.log(err))

    const handleRender=(render, name, cardnumber=0)=>{
        //console.log(evolution);
        let listRender = []
        
        if (name=='type')
        {
            localStorage.setItem("classcustom", render[0][name])
            listRender.push(
                render.map((rende)=>(
                    <li className={rende.type=="Dragão" ? style.Dragon : style[rende.type]}>
                        {rende.type}
                    </li>
            )))
            //console.log(render);
            
        } 
        else
        {
            listRender.push(
                    render.map((rende, index)=>(
                        <>
                        {name=='name' ? 
                            (<>
                                <li className={style[localStorage.getItem("classcustom")]}>
                                    <span>{rende.name}</span>
                                    <span>{isNaN(rende.Lv) ? (""):(<span>Level: </span>)}{rende.Lv}</span>
                                    <img src={rende.img} />
                                </li>
                                <span className={style.seta}>{index < render.length-1 ? `${rende.img.slice(14, 17)==134 || rende.img.slice(14, 17)==135 ? "Or"  : "➔"}` : "" }</span>
                            </>)
                            :
                            (<>
                                <li className={rende.type=="Dragão" ? style.Dragon : style[rende.type]}>
                                    {rende.type}
                                </li>
                           </>)
                        }
                       </>
                    ))
                )
        }
        return listRender

    }

    const handlecard=()=>{
        const list = [] 
        cards.map((card)=>(
            list.push(
            <div id={card.name} className={`poke_card ${style.pokemon_Card}`} key={card.number}>

                <div onClick={()=>CloseSection()}>
                    <AiFillCloseCircle />
                </div>

                <h1>
                    {card.name} 
                    <span>
                        {card.number}
                    </span>
                </h1>

                <img className={style.png} src={card.images} />

                <ul className={style.type}>
                    {handleRender(card.types, 'type')}
                </ul>

                <h3 className={style.h3_evolution}>Evolutions:</h3>
                <ul className={style.evolution}>
                    {handleRender(card.evolution, 'name', card.number)}
                </ul>

                <h3 className={style.h3_description}>Description: </h3>
                <p>{card.description}</p>

                <h3 className={style.h3_super_damange}>Fraquezas:</h3>
                <ul className={style.super_damange}>
                    {handleRender(card.superdamange, 'superdamange', card.number)}
                </ul>

                <ul className={style.stats}>
                    <h3>Base Stats:</h3>
                    <li>HP: <span>{card.baseStats["HP"]}</span></li>
                    <li>Atack: <span>{card.baseStats["Atack"]}</span></li>
                    <li>Defense: <span>{card.baseStats["Defense"]}</span></li>
                    <li>SP.Atack: <span>{card.baseStats["Sp.atack"]}</span></li>
                    <li>SP.Def: <span>{card.baseStats["Sp.Def"]}</span></li>
                    <li>Speed: <span>{card.baseStats["Speed"]}</span></li>
                </ul>

            </div>)
        ))
        return list
    }

    //console.log(handlecard().props.children[0]);

    const CloseSection=()=>{
        
        const section = document.getElementById("pokedex_open")
        section.parentNode.removeChild(section)
        document.querySelector(".Cards_selected__3tg-E").classList.remove("Cards_selected__3tg-E")
    }

    //console.log(localStorage.getItem("pokemon"));
    
    useEffect(()=>{

        document.querySelectorAll(".poke_card").forEach((pokeCard) => {
            pokeCard.addEventListener("click", ()=> {
                
               
                //console.log(index);

                if (!document.querySelector("#pokedex_open"))
                {

                    const section = document.createElement("section")
                    section.setAttribute("id", "pokedex_open")

                    const fother = document.getElementById("container")
                    //console.log(fother);
                    fother.appendChild(section)
                    pokeCard.classList.add(style.selected)
                    //console.log(style.selected)
                }

                document.querySelector("#pokedex_open").classList.add(style.Section_Pokedex)

            })
        
        })
    })
    return <BarSeach list={handlecard()} />
}

export default ManipulationAPI