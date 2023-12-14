import { useEffect, useState } from "react";
import style from "./css/Cards.module.css"
import { AiFillCloseCircle } from "react-icons/ai"
import { FcNext, FcPrevious } from "react-icons/fc"
import { Fragment } from "react";
import BarSeach from "./BarSeach";

function MountCards(props) {
    const [nex_Pre, setNex_Pre] = useState(true)
    const [cardSelected, setCardSelected] = useState([])
    const [createrCards, setCreaterCards] = useState()

    // Function ( handleRender ) reponsavel por Adicionar as informações referentes aos seus Typos, evolutções e typos de pokemons que tem vantagens sobre ele.
    const handleRender = (render, name, cardNumber = 0) => {
        let listRender = []
        localStorage.setItem("classcustom", render[0][name])

        // Typos
        if (name == 'type') {
            listRender.push(
                render.map((rende) => (
                    <li key={`${cardNumber}-Type:${rende.type}`} className={rende.type == "Dragão" ? style.Dragon : style[rende.type]}>
                        {rende.type}
                    </li>
                )))

        }// Linha Evolutiva
        else if (name == 'name') {
            listRender.push(
                render.map((rende, index) => (
                    <ul key={`${cardNumber}_Evolution_Poke:${rende.name}-ul`} className={style.All_list}>
                        <li key={`${cardNumber}-Evolution_Poke:${rende.name}-ul-li`}>
                            <ul key={`${cardNumber}-Evolution_Poke:${rende.name}-ul-li-ul`} className={style.poke_infor}>
                                <li key={`${cardNumber}_Evolution_Poke:${rende.name}-name`} className={style.name}>
                                    {rende.name}
                                </li>
                                <li key={`${cardNumber}-Evolution_Poke:${rende.name}-lv`} className={style.Lv}>
                                    {isNaN(rende.Lv) ? ("") : (<span>Level: </span>)}{rende.Lv}
                                </li>
                                <li key={`${cardNumber}-Evolution_Poke:${rende.name}-img`} className={style.Ev_img}>
                                    <img src={rende.img} />
                                </li>
                            </ul>
                        </li>
                        <li
                            key={`${cardNumber}_Evolution_Seta:${rende.name}-span`}
                            className={style.seta}>
                            {index < render.length - 1 ? `${window.innerWidth.valueOf() < 793 ? "↓" : "➔"}` : ""}
                        </li>
                        {render.length - 1 === index && rende.moreOneEvolution &&
                            <li key={`${cardNumber}M_o_Evolution_Poke:${rende.name}-ul-li`} className={`${style.M_o_Evolution} ${localStorage.getItem("classcustom") == "Eevee" ? style.eevee : style.EvoDubleorMore}`}>
                                {rende.moreOneEvolution.map((M_O_Evolution) => (
                                    <ul key={`${cardNumber}M_o_Evolution_Poke:${M_O_Evolution.name}-ul-li-ul`}>
                                        <li key={`${cardNumber}M_o_Evolution_Poke:${M_O_Evolution.name}-name`} className={style.name}>
                                            {M_O_Evolution.name}
                                        </li>
                                        <li key={`${cardNumber}M_o_Evolution_Poke:${M_O_Evolution.name}-lv`} className={style.Lv}>
                                            {isNaN(M_O_Evolution.Lv) ? ("") : (<span>Level: </span>)}{M_O_Evolution.Lv}
                                        </li>
                                        <li key={`${cardNumber}M_o_Evolution_Poke:${M_O_Evolution.name}-img`} className={style.Ev_img}>
                                            <img src={M_O_Evolution.img} />
                                        </li>
                                    </ul>
                                ))}
                            </li>
                        }
                    </ul>
                ))
            )
        }// Fraquezas
        else {
            listRender.push(
                render.map((rende) => (
                    <li
                        key={`${cardNumber}_Sup.Damage:${rende.type}`}
                        className={rende.type == "Dragão" ? style.Dragon : style[rende.type]}>
                        {rende.type}
                    </li>
                ))
            )
        }

        return listRender

    }

    // A function ( handlecard ) tem como objetiov montar os cartões de cada pokemon
    useEffect(() => {

        setCreaterCards(Mountcard())

    }, [cardSelected, props.generation, nex_Pre])


    const Mountcard = () => {
        const list = []
        cardSelected.map((card) => (
            list.push(
                <div /*onMouseEnter={() => handleClickCard()}*/ id={card.name} className={`poke_card ${style.pokemon_Card}`} key={card.number}>
                    <div id="close" className={style.closed} /*onClick={() => CloseSection()}*/>
                        <AiFillCloseCircle />
                    </div>
                    {nex_Pre ?
                        (
                            <>
                                <img className={style.png} src={card.images} alt={`Pokemon:${card.name}`} />
                                <h1 className={style.h1_name}>
                                    <span>Nome: </span>{card.name}

                                </h1>
                                <h2 className={style.Pokedex_num}>
                                    <span>Pokedex: </span>{card.number}
                                </h2>
                                <h3 className={style.h3_Tipos}>Tipo(s): </h3>
                                <ul key={`Type:${card.number}`} className={style.type}>
                                    {handleRender(card.types, 'type', card.number)}
                                </ul>
                                <h3 className={style.h3_description}>Description: </h3>
                                <p className={style.description}>{card.description}</p>
                                <h3 className={style.h3_super_damange}>Fraquezas:</h3>
                                <ul key={`SuperDamege:${card.name}`} className={style.super_damange}>
                                    {handleRender(card.superdamange, 'superdamange', card.number)}
                                </ul>
                            </>
                        ) : (
                            <>
                                <h3 className={style.h3_evolution}>Evolutions:</h3>
                                <ul key={`Evolution:${card.number}`} className={style.evolution}>
                                    {handleRender(card.evolution, 'name', card.number)}
                                </ul>
                                <h3 className={style.h3_stats}>Base Stats:</h3>
                                <ul className={style.stats}>
                                    <li>HP: <span>{card.baseStats["HP"]}</span></li>
                                    <li>Atack: <span>{card.baseStats["Atack"]}</span></li>
                                    <li>Defense: <span>{card.baseStats["Defense"]}</span></li>
                                    <li>SP.Atack: <span>{card.baseStats["Sp.atack"]}</span></li>
                                    <li>SP.Def: <span>{card.baseStats["Sp.Def"]}</span></li>
                                    <li>Speed: <span>{card.baseStats["Speed"]}</span></li>
                                </ul>
                            </>
                        )
                    }
                    <button
                        onClick={() => setNex_Pre((nex_Pre) => !nex_Pre)}
                        className={`Pokedex_button ${nex_Pre ? style.button_right : style.button_left}`}>
                        {nex_Pre ? <FcNext /> : <FcPrevious />}
                    </button>
                </div>
            )
        ))

        return list
    }

    // function responsavel por criar a section e a div 
    const handleClickCard = () => {

        document.querySelectorAll(".poke_card").forEach((pokeCard) => {
            pokeCard.addEventListener("click", () => {

                if (!document.getElementById("pokedex_open")) {
                    const fother = document.getElementById("container")

                    // Section fundo da pokedex
                    const section = document.createElement("section")
                    section.setAttribute("id", "pokedex_open")
                    fother.parentNode.appendChild(section)


                    // Div se sobresair sobre o fundo ao clicar no cartõa 
                    const div = document.createElement("div")
                    div.setAttribute("id", "div_backede")
                    fother.parentNode.appendChild(div)

                    document.querySelector("#pokedex_open").classList.add(style.Section_Pokedex)
                    document.querySelector("#div_backede").classList.add(style.container_blockade)


                    pokeCard.childNodes[pokeCard.childNodes.length - 1].setAttribute("id", "btnSelected")

                    props.handlefilter(pokeCard.childNodes[3].childNodes[1].nodeValue.slice(1, 5))
                    pokeCard.classList.add(style.selected)
                }
                return
            })
        })
    }

    // Function ( CloseSection ) respomsavel por fecha a ( section ) e a ( div ) da pokedex e remover todos os atributos refentes a ela.
    const CloseSection = () => {

        const section = document.getElementById("pokedex_open")
        const div = document.getElementById("div_backede")
        setNex_Pre(true)

        section.parentNode.removeChild(section)
        div.parentNode.removeChild(div)


        document.querySelector('#btnSelected').removeAttribute("id", "btnSelected")
        document.querySelector(".Cards_selected__3tg-E").classList.remove("Cards_selected__3tg-E")

        props.handlefilter(document.getElementById("input").value)

        return
    }

    return (
        <Fragment>
            <BarSeach setCardSelected={setCardSelected} generation={props.generation} />
            {createrCards}
        </Fragment>
    )
}

export default MountCards