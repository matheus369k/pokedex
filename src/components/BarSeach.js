import { useEffect, useState } from "react";
import style from "./BarSeach.module.css";
import img from "../img/pokeball.png";
import { BiSearch } from "react-icons/bi";
import { AiFillDownCircle } from "react-icons/ai"

function BarSeach(props){

    const [seach, setSeach]=useState("")
    const [nextPrev, setNextPrev]=useState(9)
    const [validation, setValidation]=useState(true)
    
    const handlefilter=(e="")=>{
        const listFilter = []
        
        for (let index = 0; index < props.list.length; index++) {

            if (isNaN(e)) {
                var clientSeach = props.list[index]["props"]["id"]
                var sliceStart = 0
            } else {
                var clientSeach = props.list[index]["key"]
                var sliceStart = 1 
            }

            if (e === "") 
            {
                setSeach(props.list)
                return 
            }
            let pokeNumber = clientSeach

            let cardNumber=(pokeNumber.slice(sliceStart, e.length+sliceStart))

            if (e.toLowerCase()==cardNumber.toLowerCase())
            {
                listFilter.push(props.list[index])
            }            
        }
        setSeach(listFilter)
        return
    }

    const NextPrevent=(e)=>{
        if (e=='More' && props.list.length > Number(nextPrev)) 
        {
            setNextPrev(Number(nextPrev)+25)
        }
        return
    }

    useEffect(()=>{
        if(validation!==props.pokedexNP) 
        {
            handlefilter(document.querySelector("#input").value)
            setValidation(props.pokedexNP)
            console.log(2, document.querySelector("#input").value);
        }
        return
    })
    

    return (
        <>
            <form className={style.seach_Container}>
                <label><BiSearch /></label>
                <img className={style.pokeboll} src={img} />
                <input id="input" type="text" onChange={(e)=>handlefilter(e.target.value)} placeholder="Search..." />
            </form>
            <section key={`List_Cards:0-${nextPrev}`}>{seach === "" ? props.list.slice(0, nextPrev) : seach.slice(0, nextPrev) }</section>
            <button className={style.button_More} onClick={(e)=>NextPrevent('More')}><AiFillDownCircle/></button>
        </>
    )
}

export default BarSeach