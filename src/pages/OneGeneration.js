import axios from "axios"
import Container from "../components/Container"
import { useEffect, useState } from "react";

import bulbasaurEvolutions from "../img/bulbasar-evolitions.jpg"
import charmanderEvolutions from "../img/charmander-evolutions.jpg"
import SquirdleEvolutions from "../img/squirdle-evolutions.jpg"
import CartepieEvolutions from "../img/cartepie-evolutions.jpeg"
import WeedleEvolutions from "../img/weedle-evolutions.jpg"
import pokedex from "../img/pokedex-opne.jpeg"


function OneGeneration() {
    const [cards, setCards]=useState([])
    const [pokeEvolution, setPokeEvolution]=useState(0)

    axios("https://matheus369k.github.io/Data/pokedex.json")
    .then((resp)=> {
        //console.log(resp.data["land_orange"]);
        setCards(resp.data["land_orange"])
        
    }).catch((err)=> console.log(err))

    const handleImg=(card)=>{
        //console.log(card[0]["png"])

        return card[0]["png"]
    }

    const handleTypes=(card)=>{

        //console.log(card[0]["type"]);

        return (
            <>
                {card.length === 1 ? 
                (
                    <li>{card[0]["type"]}</li>

                ) : (

                    <>
                        <li>{card[0]["type"]}</li>
                        <li>{card[1]["type"]}</li>
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
                <h1>{card.name} <span>{card.number}</span></h1>
                <img src={handleImg(card.images)} />
                <ul>{handleTypes(card.types)}</ul>
                <p>{card.description}</p>
            </div>)
        ))
        return list
    }

    //console.log(handlecard().props.children[0]);
    const handlefilter=()=>{
        const listFilter=[]

        if (pokeEvolution===0) {
            listFilter.push(handlecard()[0], handlecard()[1], handlecard()[2])
        } else if (pokeEvolution===1) {
            listFilter.push(handlecard()[3], handlecard()[4], handlecard()[5])
        } else if (pokeEvolution===2) {
            listFilter.push(handlecard()[6], handlecard()[7], handlecard()[8])
        } else if(pokeEvolution===3) {
            listFilter.push(handlecard()[9], handlecard()[10], handlecard()[11])
        } else if (pokeEvolution===4) {
            listFilter.push(handlecard()[12], handlecard()[13], handlecard()[14])
        }
        return listFilter
    }   
    
    document.querySelectorAll(".poke_card").forEach(pokeCard => {
        pokeCard.addEventListener("click", ()=> {
            const cardlist=[pokeCard]

            if (!document.querySelector("#pokedex_open"))
            {
                const section = document.createElement("section")
                section.setAttribute("id", "pokedex_open")

                const fother = document.getElementById("container")
                //console.log(fother);
                fother.appendChild(section)
            }
        })
    })

    return (
        <Container customClass="One_Generetion" classCustomCard="card">
            {handlefilter()}
            {!document.querySelector("#pokedex_open") && (
                    <ul>
                        <li><img onClick={()=>setPokeEvolution(0)} src={bulbasaurEvolutions} /></li>
                        <li><img onClick={()=>setPokeEvolution(1)} src={charmanderEvolutions}/></li>
                        <li><img onClick={()=>setPokeEvolution(2)} src={SquirdleEvolutions}/></li>
                        <li><img onClick={()=>setPokeEvolution(3)} src={CartepieEvolutions}/></li>
                        <li><img onClick={()=>setPokeEvolution(4)} src={WeedleEvolutions}/></li>
                    </ul>
                )
            }
        </Container>
    )
}

export default OneGeneration