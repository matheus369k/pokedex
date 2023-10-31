import { useState } from "react";
import style from "./BarSeach.module.css";
import img from "../img/pokeball.png";
import { BiSearch } from "react-icons/bi";
import { FcNext, FcPrevious } from "react-icons/fc"

function BarSeach(props){
    /*const log=()=>{
        console.log(props.list[0]["key"]);
        console.log(props.list[0]["props"]["id"]);
        console.log(props.list[0]["props"]["children"][1]["props"]["children"][2]["props"]["children"]);
    }*/

    const [seach, setSeach]=useState('')
    const [nextPrev, setNextPrev]=useState([0, 25])

    //console.log(seach);
    
    const handlefilter=(e)=>{
        const listFilter=[]
        setSeach("")
        //console.log(isNaN(e));
        
        for (let index = 0; index < props.list.length; index++) {
            //console.log(props.list.length, index);

            if (isNaN(e)) {
                var clientSeach = props.list[index]["props"]["id"]
                var sliceStart = 0
            } else {
                var clientSeach = props.list[index]["key"]
                var sliceStart = 1 
            }

            //console.log(sliceStart);

            if (e === "") 
            {
                listFilter.push(props.list)
                setSeach(listFilter)
                return
            }
            let pokeNumber = clientSeach
            //console.log(pokeNumber);

            let cardNumber=(pokeNumber.slice(sliceStart, e.length+sliceStart))

            //console.log(e.toLowerCase(),"==",cardNumber.toLowerCase());

            if (e.toLowerCase()==cardNumber.toLowerCase())
            {
                listFilter.push(props.list[index])
                //console.log("props.list[Number(e-1)]")
                setSeach(listFilter)
                
            }
        
            
        }
        return
    }

    const NextPrevent=(e)=>{
        if (e=='Next') 
        {
            setNextPrev([Number(nextPrev[0])+25, Number(nextPrev[1])+25])
        } 
        else if (nextPrev[0] > 0)
        {
            setNextPrev([Number(nextPrev[0])-25, Number(nextPrev[1])-25])
        }
        
        //console.log(Number(nextPrev);
    }

    const view=()=>{
        if (seach=='')
        {
            return props.list.slice(Number(nextPrev[0]), Number(nextPrev[1]))
        }
        else{
            return seach
        }
    }

    return (
        <>
            <form className={style.seach_Container}>
                <label><BiSearch /></label>
                <img className={style.pokeboll} src={img} />
                <input type="text" onChange={(e)=>handlefilter(e.target.value)} placeholder="Search..." />
            </form>
            {view()}
            <button className={style.button_next} onClick={(e)=>NextPrevent('Next')}><FcNext/></button>
            <button className={style.button_prevent} onClick={(e)=>NextPrevent('Prevent')}><FcPrevious/></button>
        </>
    )
}

export default BarSeach