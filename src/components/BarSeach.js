import { useState } from "react";
import style from "./BarSeach.module.css";
import img from "../img/pokeball.png";
import { BiSearch } from "react-icons/bi";
import { AiFillDownCircle } from "react-icons/ai"

function BarSeach(props){
    /*const log=()=>{
        console.log(props.list[0]["key"]);
        console.log(props.list[0]["props"]["id"]);
        console.log(props.list[0]["props"]["children"][1]["props"]["children"][2]["props"]["children"]);
    }*/

    const [seach, setSeach]=useState('')
    const [nextPrev, setNextPrev]=useState(9)

    //console.log(seach);
    
    const handlefilter=(e="")=>{
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
                setSeach("")
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
        //console.log(seach.length);  
        if (e=='More' && props.list.length > Number(nextPrev)) 
        {
            setNextPrev(Number(nextPrev)+25)
        }
        view()
        return
    }

    const view=()=>{
        if (seach=='')
        {
            return props.list.slice(0, nextPrev)
        }
        else{
            return seach.slice(0, nextPrev)
        }
    }

    return (
        <>
            <form className={style.seach_Container}>
                <label><BiSearch /></label>
                <img className={style.pokeboll} src={img} />
                <input type="text" onChange={(e)=>handlefilter(e.target.value)} placeholder="Search..." />
            </form>
            <section key={`List_Cards:0-${nextPrev}`}>{view()}</section>
            <button className={style.button_More} onClick={(e)=>NextPrevent('More')}><AiFillDownCircle/></button>
        </>
    )
}

export default BarSeach