import { useState } from "react";

function BarSeach(props){
    const log=()=>{
        console.log(props.list[0]["key"]);
        //console.log(props.list[0]["props"]["children"][1]["props"]["children"][2]["props"]["children"]);
    }

    const [seach, setSeach]=useState("")
    //console.log(seach);
    
    const handlefilter=(e)=>{
        const listFilter=[]
        setSeach("")
        //console.log(e);
        
        for (let index = 0; index < props.list.length; index++) {
            //console.log(props.list.length, index);

            if (e === "") 
            {
                listFilter.push(props.list)
                setSeach(listFilter)
                return
            }
            let pokeNumber = props.list[index]["key"]
            //console.log(pokeNumber);

            let cardNumber=(pokeNumber.slice(1, e.length+1))

            //console.log(cardNumber,"--",e);

            if (e==cardNumber)
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
        <label>Pesquisa </label>
        <input type="text" onChange={(e)=>handlefilter(e.target.value)} />
        {seach} 
        <button onClick={()=>log()}>Console</button>
        </>
    )
}

export default BarSeach