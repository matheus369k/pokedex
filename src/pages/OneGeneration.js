import Container from "../components/Container"

import bulbasaurEvolutions from "../img/bulbasar-evolitions.jpg"
import charmanderEvolutions from "../img/charmander-evolutions.jpg"
import SquirdleEvolutions from "../img/squirdle-evolutions.jpg"
import CartepieEvolutions from "../img/cartepie-evolutions.jpeg"
import WeedleEvolutions from "../img/weedle-evolutions.jpg"
import style from "./Cards.module.css"
import ManipulationAPI from "../components/ManipulationAPI";
import { useState } from "react"


function OneGeneration() {
    const API = "https://matheus369k.github.io/Data/pokedex.json"
    const [pokeEvolution, setPokeEvolution]=useState(0)
    const [listHider, setListHider]=useState(false)

    return (
        <Container customClass="One_Generetion" classCustomCard="card">
            <div id="container"  className={style.card}>
    
                <ManipulationAPI api={API}  pokeevolution={pokeEvolution} setlisthider={setListHider} />
    
                {/*!listHider &&
                    <ul>
                        <li><img onClick={()=>setPokeEvolution(0)} src={bulbasaurEvolutions} /></li>
                        <li><img onClick={()=>setPokeEvolution(1)} src={charmanderEvolutions}/></li>
                        <li><img onClick={()=>setPokeEvolution(2)} src={SquirdleEvolutions}/></li>
                        <li><img onClick={()=>setPokeEvolution(3)} src={CartepieEvolutions}/></li>
                        <li><img onClick={()=>setPokeEvolution(4)} src={WeedleEvolutions}/></li>
                    </ul>
                */}
            </div>    
        </Container>
    )
}

export default OneGeneration