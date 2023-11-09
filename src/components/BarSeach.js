import { useEffect, useState } from "react";
import style from "./BarSeach.module.css";
import img from "../img/pokeball.png";
import { BiSearch } from "react-icons/bi";
import { AiFillDownCircle } from "react-icons/ai"
import ManipulationAPI from "./ManipulationAPI";
import axios from "axios"

function BarSeach(props){
    const [nextPrev, setNextPrev]=useState(9)
    const [verifivationInput, setVerifivationInput]=useState("")
    const [cards, setCards]=useState([])

    // Function ( handlefilter ) responsavel por filtrar os cartões com base no nome ou numero da pokedex
    const handlefilter=(e="")=>{
        setVerifivationInput(e)

        // axios reponsavel por buscar os arquivos no repositoria do github.
        axios(props.api)
            .then((resp)=> {

                const listFilter = []
                
                for (let index = 0; index < resp.data[props.generation].length; index++) {

                    if (isNaN(e)) {
                        var clientSeach = resp.data[props.generation][index]["name"]
                        var sliceStart = 0
                    } else {
                        var clientSeach = resp.data[props.generation][index]["number"]
                        var sliceStart = 1 
                    }

                    if (e === "" ) 
                    {
                        setCards(resp.data[props.generation].slice(0, nextPrev))
                        return 
                    }
                    setNextPrev(9)
                    let pokeNumber = clientSeach

                    let cardNumber=(pokeNumber.slice(sliceStart, e.length+sliceStart))

                    if (e.toLowerCase()==cardNumber.toLowerCase())
                    {
                        listFilter.push(resp.data[props.generation][index])
                    }
                }
                setCards(listFilter.slice(0, nextPrev))
            }).catch((err)=> console.log(err))
        return
    }

    // Function ( NextPrevent ) responsavel por almentar a quantidade de cards que aparecem na tela
    const NextPrevent=()=>{
        if (151 > Number(nextPrev)) 
        {
            setNextPrev(Number(nextPrev)+25)
        }
        handlefilter()
        return
    }

    // Objetivo de re-chamar a function ( handlefilter ) e atualiza-la ao ter modificações
    useEffect(()=>{
        handlefilter(document.getElementById("input").value)
    }, [nextPrev])
    
    return (
        <section>
            <form className={style.seach_Container}>
                <label><BiSearch /></label>
                <img className={style.pokeboll} src={img} />
                <input autoComplete="off" id="input" type="text" onLoadedMetadata={(e)=>handlefilter(e.target.value)} onChange={(e)=>handlefilter(e.target.value)} placeholder="Search..." />
            </form>
            <ManipulationAPI handlefilter={handlefilter} cards={cards.length > 9 ? cards.slice(0, nextPrev) : cards} />
            {verifivationInput==="" && 
                <button className={style.button_More} onClick={()=>NextPrevent()}><AiFillDownCircle/></button>
            }
        </section>
    )
}

export default BarSeach