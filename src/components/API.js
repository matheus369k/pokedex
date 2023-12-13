import axios from "axios";

import { useEffect } from "react";

function API(props){

    /* Link da API */
    const API = "https://matheus369k.github.io/Data/pokedex.json"

    useEffect(() => {

        axios(API, {
            method: 'GET'
        })
            .then((resp) => {

                props.setListAllCards(resp.data[props.generation])

            }).catch((err) => console.log(err))

    }, [props.generation])
}

export default API