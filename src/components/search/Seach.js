
import React from 'react';
import "./index.css";
import img from "../../assets/pokeball.png";
import { BiSearch } from "react-icons/bi";
import { useForm } from "react-hook-form";
import API from '../../service/API';

export default function Seach() {
    const {register, handleSubmit} = useForm();
   
    const onSubmit = (data) =>{
        console.log(data)
        API()
    };

    /*const [nextPrev, setNextPrev] = useState([0, 9]);
    const [listAllCards, setListAllCards] = useState([]);

    const handlefilter = (e = "") => {

        const listFilter = []

        for (let index = 0; index < listAllCards.length; index++) {

            if (e === "") {

                props.setCardSelected(listAllCards.slice(parseInt(nextPrev[0]), parseInt(nextPrev[1])))

                return
            };

            if (nextPrev[1] > 9){

                setNextPrev([0, 9])

            }


            if (isNaN(e)) {
                var clientSeach = listAllCards[index]["name"]
    
                let cardNumber = (clientSeach.slice(0, e.length))
    
                if (e.toLowerCase() === cardNumber.toLowerCase()) {
    
                    listFilter.push(listAllCards[index])
                };
                
            } else {
    
                let cardNumber = listAllCards[index]["number"]
    
                if (parseInt(e) <= parseInt(cardNumber.split('#')[1])) {
    
                    listFilter.push(listAllCards[index])
                };
            };
        }

        props.setCardSelected(listFilter.slice(parseInt(nextPrev[0]), parseInt(nextPrev[1])))

        return
    };  

    const NextPrevent = (index) => {

        if (index === 1 && parseInt(nextPrev[1]) < listAllCards.length) {

            setNextPrev([nextPrev[0] = parseInt(nextPrev[0]) + 9, nextPrev[1] = parseInt(nextPrev[1]) + 9])

        } else if (index === 0 && parseInt(nextPrev[0]) > 0) {

            setNextPrev([nextPrev[0] = parseInt(nextPrev[0]) - 9, nextPrev[1] = parseInt(nextPrev[1]) - 9])

        }

        return

    }

    useEffect(() => {

        handlefilter()

    }, [listAllCards, nextPrev]) */

    return (
            <form onSubmit={handleSubmit(onSubmit)} className="form_container">
                <label><BiSearch /></label>
                <img className="pokeboll" src={img} />
                <input 
                    maxLength={16} 
                    autoComplete="off" 
                    id="input" 
                    name='search' 
                    type="text" 
                    {...register('search')} 
                    placeholder="Search..." 
                />
            </form>
    )
}
