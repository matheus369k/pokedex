import axios from "axios"
import Container from "../components/Container"
import { useState } from "react";


function OneGeneration() {
    const [cards, setCards]=useState([])

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
        return (
            <>
                {
                    cards.map((card)=>(
                        <div key={card.name}>
                            <h1>{card.name} <span>{card.number}</span></h1>
                            <img src={handleImg(card.images)} />
                            <ul>{handleTypes(card.types)}</ul>
                            <p>{card.description}</p>
                        </div>
                    ))
                }
             </>
        )
    }

    return (
        <Container customClass="One_Generetion" classCustomCard="card">
            {handlecard()}
        </Container>
    )
}

export default OneGeneration