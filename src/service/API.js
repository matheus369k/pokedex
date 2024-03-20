import axios from "axios";

async function API() {

    /* Link da API http://localhost:3000/pokedex/#
    C:\Users\gomes\OneDrive\Documentos\GitHub\
    */

    await axios("http://localhost:3000/src/data/generation-1.json")
    .then(resp => console.log(resp.data))
    .catch(err => console.log(err))
}

export default API