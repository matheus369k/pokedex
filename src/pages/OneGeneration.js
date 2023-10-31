import Container from "../components/Container"

import style from "./Cards.module.css"
import ManipulationAPI from "../components/ManipulationAPI";


function OneGeneration() {
    const API = "https://matheus369k.github.io/Data/pokedex.json"

    return (
        <Container customClass="One_Generetion">
            <div key="One_Generetion" id="container" className={style.card}>
                <ManipulationAPI api={API} />
            </div>    
        </Container>
    )
}

export default OneGeneration