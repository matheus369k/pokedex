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


    const handleRender = (render, name, cardNumber = 0) => {

        let listRender = []

        localStorage.setItem("classcustom", render[0][name])

        if (name == 'type') {

            listRender.push(

                render.map((rende) => (

                    <li key={`${cardNumber}-Type:${rende.type}`} className={rende.type == "Dragão" ? style.Dragon : style[rende.type]}>

                        {rende.type}

                    </li>

                )))

        }
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
                            className={`${style.seta} ${index < render.length - 1 ? style.set_next_poke : ""}`} >
                        </li>

                        {render.length - 1 === index && rende.moreOneEvolution &&

                            <li
                                key={`${cardNumber}M_o_Evolution_Poke:${rende.name}-ul-li`}
                                className={`${style.M_o_Evolution} ${localStorage.getItem("classcustom") == "Eevee" ? style.eevee : style.EvoDubleorMore}`}>

                                {rende.moreOneEvolution.map((M_O_Evolution) => (

                                    <ul key={`${cardNumber}M_o_Evolution_Poke:${M_O_Evolution.name}-ul-li-ul`}>

                                        <li
                                            key={`${cardNumber}M_o_Evolution_Poke:${M_O_Evolution.name}-name`}
                                            className={style.name}>

                                            {M_O_Evolution.name}

                                        </li>

                                        <li
                                            key={`${cardNumber}M_o_Evolution_Poke:${M_O_Evolution.name}-lv`}
                                            className={style.Lv}>

                                            {isNaN(M_O_Evolution.Lv) ? ("") : (<span>Level: </span>)}{M_O_Evolution.Lv}

                                        </li>

                                        <li
                                            key={`${cardNumber}M_o_Evolution_Poke:${M_O_Evolution.name}-img`}
                                            className={style.Ev_img}>

                                            <img src={M_O_Evolution.img} />

                                        </li>

                                    </ul>

                                ))}

                            </li>

                        }

                    </ul>

                ))

            )

        }

        else {

            listRender.push(

                render.map((rende) => (

                    <li key={`${cardNumber}_Sup.Damage:${rende.type}`} className={rende.type == "Dragão" ? style.Dragon : style[rende.type]}>

                        {rende.type}

                    </li>

                ))

            )

        }

        return listRender

    }


    useEffect(() => {

        setCreaterCards(Mountcard())

    }, [cardSelected, props.generation, nex_Pre])


    const Mountcard = () => {

        const list = []

        cardSelected.map((card, index) => (

            list.push(

                <div onClick={() => handleClickCard(card.name)} id={card.name} className={`poke_card ${style.pokemon_Card}`} key={card.number}>

                    <div id="close" className={style.closed} onClick={(e) => CloseSection(e)}>

                        <AiFillCloseCircle />

                    </div>

                    {nex_Pre ?

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

                        :

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

                    }

                    <button onClick={() => setNex_Pre((nex_Pre) => !nex_Pre)}
                        className={`Pokedex_button ${nex_Pre ? style.button_right : style.button_left}`}>

                        {nex_Pre ? <FcNext /> : <FcPrevious />}

                    </button>

                </div>

            )

        ))

        return list

    }

    const handleClickCard = (card) => {

        const cardselect = document.getElementById(card)

        cardselect.classList.add(style.selected)

        document.querySelector('.Cards_card__yiAy8').classList.add(style.hider_cards)



        if (!document.querySelector('.Cards_container_blockade__FZC9n') && window.innerWidth > 624) {

            const div = document.createElement('div')

            div.setAttribute('class', `${style.container_blockade}`)

            document.querySelector('.Cards_card__yiAy8').appendChild(div)
        }

        return
    }


    const CloseSection = (e) => {

        e.stopPropagation();

        const blockdiv = document.querySelector('.Cards_container_blockade__FZC9n')

        if (blockdiv) {

            document.querySelector('.Cards_card__yiAy8').removeChild(blockdiv)

        }

        document.querySelector('.Cards_selected__DEBgR').classList.remove('Cards_selected__DEBgR')

        document.querySelector('.Cards_hider_cards__EHYQ8').classList.remove('Cards_hider_cards__EHYQ8')

        setNex_Pre(true)

        return
    }

    return (
        <Fragment>
            <BarSeach setCardSelected={setCardSelected} generation={props.generation} />
            <section>{createrCards}</section>
        </Fragment>
    )
}

export default MountCards