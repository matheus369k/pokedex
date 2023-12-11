import { useEffect, useState } from "react";
import axios from "axios";

import style from "./css/BarSeach.module.css";

import img from "../img/pokeball.png";

import { BiSearch } from "react-icons/bi";
import { AiFillDownCircle } from "react-icons/ai"

import MountCards from "./MountCards";

function BarSeach(props){
    const [nextPrev, setNextPrev]=useState([0 ,9]);
    const [verifivationInput, setVerifivationInput]=useState("");
    const [cards, setCards]=useState([]);


    const handlefilter=(e="")=>{
        setVerifivationInput(e)

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
                    };

                    if (e === "" ) 
                    {
                        setCards(resp.data[props.generation].slice(nextPrev[0], nextPrev[1]))

                        return 
                    };
                    let pokeNumber = clientSeach

                    let cardNumber=(pokeNumber.slice(sliceStart, e.length+sliceStart))

                    if (e.toLowerCase()==cardNumber.toLowerCase())
                    {
                        listFilter.push(resp.data[props.generation][index])
                    };
                }
                setCards(listFilter.slice(nextPrev[0], nextPrev[1]))

            }).catch((err)=> console.log(err))
        return
    };

    document.querySelectorAll('.btn_nextprev').forEach((btn_np, index) => {

        btn_np.addEventListener('click', ()=>{

            NextPrevent(index)

            console.log(index);
        
        })

        return

    })

    const NextPrevent=(index)=>{

        if (index === 1) {

            setNextPrev([parseInt(nextPrev[0]) + 9, parseInt(nextPrev[1]) + 9 ])

        }else if (nextPrev[0] > 0 && index === 0) {

            setNextPrev([nextPrev[0] - 9, nextPrev[1] - 9 ])

        }

        console.log(nextPrev)

        return
    }

    useEffect(()=>{

        handlefilter(document.getElementById("input").value)

        return

    }, [nextPrev])
    
    return (
        <section>
            <form className={style.seach_Container}>
                <label><BiSearch /></label>

                <img className={style.pokeboll} src={img} />

                <input autoComplete="off" id="input" type="text" onChange={(e)=>handlefilter(e.target.value)} placeholder="Search..." />
            </form>

            <MountCards handlefilter={handlefilter} cards={cards.length > 9 ? cards.slice(nextPrev[0], nextPrev[1]) : cards} />
        </section>
    )
};

export default BarSeach;