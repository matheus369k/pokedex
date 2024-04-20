import img from "../../../assets/pokeball.png";
import { get_data, predicted_data } from "../../../service/get-data";
import { closePokedex, searchOfNumber, searchOfName } from "../../../function/index";
import { BiSearch } from "react-icons/bi";
import { useForm } from "react-hook-form";
import "./index.css";

export function Form({setPredictedData, setPokedex, setCards}) {
    const {
        register,
        handleSubmit,
        watch
    } = useForm();

    watch((data) => {
        const pokemonsAllPredicted = predicted_data();

        if (Number(data.search))
            return setPredictedData(searchOfNumber(data.search, pokemonsAllPredicted, 3));

        return setPredictedData(searchOfName(data.search, pokemonsAllPredicted, 2));
    });

    const onSubmit = (data) => {
        const pokemonsAll = get_data();

        setPredictedData([]);
        closePokedex(setPokedex);

        if (Number(data.search))
            return setCards({search: false, data: searchOfNumber(data.search, pokemonsAll, 30)});

        return setCards({
            search: data.search == "" ? false : true,
            data: searchOfName(data.search, pokemonsAll, 29)
        });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="form_container"
        >
            <label htmlFor="search">
                < BiSearch />
            </label>
            <img
                className="pokeboll"
                src={img}
                alt="imagem de uma pokeboll"
            />
            <input
                maxLength={16}
                autoComplete="off"
                className="search"
                id="search"
                name="search"
                type="text" {
                ...register("search")
                }
                placeholder="Search..."
            />
        </form>
    );
};