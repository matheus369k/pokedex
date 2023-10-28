import { useState } from "react";
import style from "./BarSeach.module.css";
import img from "../img/pokeball.png";
import { BiSearch } from "react-icons/bi";

function BarSeach(props){
    /*const log=()=>{
        console.log(props.list[0]["key"]);
        console.log(props.list[0]["props"]["id"]);
        console.log(props.list[0]["props"]["children"][1]["props"]["children"][2]["props"]["children"]);
    }*/

    const [seach, setSeach]=useState('')

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

    return (
        <>
        <form className={style.seach_Container}>
            <label><BiSearch /></label>
            <img className={style.pokeboll} src={img} />
            <input type="text" onChange={(e)=>handlefilter(e.target.value)} placeholder="Search..." />
        </form>
        {seach==''?
            (
                <>{props.list}</>
            ):(
                <>{seach}</>
            )
        }
        </>
    )
}

export default BarSeach