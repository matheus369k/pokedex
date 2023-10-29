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

    const handleImgPng=(card)=>{
        //console.log(card[0]["png"])

        return card[0]["png"]
    }

    const handleImgGif=(card)=>{
        //console.log(card[1]["gif"])

        return card[1]["gif"]
    }

    /*const handleTypes=(card)=>{

        //console.log(card[0]["type"]);

        return (
            <>
                {card.length === 1 ? 
                (
                    <li className={style[card[0]["type"]]}>{card[0]["type"]}</li>

                ) : (

                    <>
                        <li className={style[card[0]["type"]]}>{card[0]["type"]}</li>
                        <li className={style[card[1]["type"]]}>{card[1]["type"]}</li>
                    </>
                )
                }
            </>
            )
    }*/

    const handleRender=(render, name)=>{
        //console.log(evolution);
        let listRender = []

        for (let i = 0; i < render.length; i++) {
            if (name=='type')
            {
                localStorage.setItem("classcustom", render[0][name])
                listRender.push(
                <li key={`${name}${render[i][name]}`} className={style[render[i][name]]}>
                    {render[i][name]}
                </li>)
            } else 
            {
                listRender.push(
                <li key={`${name}${render[i][name]}`} className={style[localStorage.getItem("classcustom")]}>
                    {render[i][name]}
                </li>)
            }
            //console.log(render[i][name]);
        }

        return listRender

    }

    const handlecard=()=>{
        const list = [] 
        cards.map((card)=>(
            list.push(
            <div id={card.name} className="poke_card" key={card.number}>
                <div onClick={()=>CloseSection()}><AiFillCloseCircle /></div>
                <h1>{card.name} <span>{card.number}</span></h1>
                <img className={style.png} src={handleImgPng(card.images)} />
                <ul className={style.type} key={`${card.name}_types`}>{handleRender(card.types, 'type')}</ul>
                <h3 className={style.h3_evolution}>Evolutions:</h3>
                <ul className={style.evolution} key={`${card.name}_evolutions`}>
                    {handleRender(card.evolution, 'name')}
                </ul>
                <h3 className={style.h3_description}>Description: </h3>
                <p>{card.description}</p>
                <img className={style.gif} src={handleImgGif(card.images)} />
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

        document.querySelectorAll(".poke_card").forEach((pokeCard, index) => {
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
                

            })
        
        })
    })
    return <BarSeach list={handlecard()} />
}

export default ManipulationAPI