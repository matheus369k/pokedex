import axios from "axios"
import { useEffect, useState } from "react";
import style  from "../pages/Cards.module.css"
import {AiFillCloseCircle} from "react-icons/ai"

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

    const handleTypes=(card)=>{

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
    }

    const handlecard=()=>{
        const list = [] 
        cards.map((card)=>(
            list.push(
            <div id={card.name} className="poke_card" key={card.name}>
                <div onClick={()=>CloseSection()}><AiFillCloseCircle /></div>
                <h1>{card.name} <span>{card.number}</span></h1>
                <img className={style.png} src={handleImgPng(card.images)} />
                <ul>{handleTypes(card.types)}</ul>
                <h3>Description: </h3>
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
    const handlefilter=()=>{
        const listFilter=[]
        //console.log(props.pokeevolution);


        if (localStorage.getItem("pokemonindex")==="") 
        { 
        if (props.pokeevolution===0) 
        {
            listFilter.push(handlecard()[0], handlecard()[1], handlecard()[2])
        }
         else if (props.pokeevolution===1) 
        {
            listFilter.push(handlecard()[3], handlecard()[4], handlecard()[5])
        }
         else if (props.pokeevolution===2) 
        {
            listFilter.push(handlecard()[6], handlecard()[7], handlecard()[8])
        }
         else if(props.pokeevolution===3) 
        {
            listFilter.push(handlecard()[9], handlecard()[10], handlecard()[11])
        }
         else if (props.pokeevolution===4) 
        {
            listFilter.push(handlecard()[12], handlecard()[13], handlecard()[14])
        }} 
        else 
        { 
            //console.log(typeof(localStorage.getItem("pokemonindex")));
            listFilter.push(handlecard()[Number(localStorage.getItem("pokemonindex"))+props.pokeevolution*3])
        }
        
        //console.log(listFilter);
        return listFilter
    }

    const CloseSection=()=>{
        
        const section = document.getElementById("pokedex_open")
        section.parentNode.removeChild(section)
        document.querySelector(".Cards_selected__3tg-E").classList.remove("Cards_selected__3tg-E")
        props.setlisthider(false)
    }

    //console.log(localStorage.getItem("pokemon"));
    
    useEffect(()=>{    
        
        localStorage.setItem("pokemonindex", "")

        document.querySelectorAll(".poke_card").forEach((pokeCard, index) => {
            pokeCard.addEventListener("click", ()=> {
                
               
                //console.log(index);

                if (!document.querySelector("#pokedex_open"))
                {
                    localStorage.setItem("pokemonindex", index)

                    const section = document.createElement("section")
                    section.setAttribute("id", "pokedex_open")

                    const fother = document.getElementById("container")
                    //console.log(fother);
                    fother.appendChild(section)
                    props.setlisthider(true)
                    pokeCard.classList.add(style.selected)
                    //console.log(style.selected)
                }
                

            })
        
        })
    })
    return handlefilter()
}

export default ManipulationAPI