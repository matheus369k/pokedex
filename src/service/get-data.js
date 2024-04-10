import {
    generation_1,
    generation_2,
    generation_3,
    generation_4,
    generation_5,
    generation_6,
    generation_7,
    generation_8
} from "../data/index.js";

export const get_data = () => {
    return [
        ...generation_1,
        ...generation_2,
        ...generation_3,
        ...generation_4,
        ...generation_5,
        ...generation_6,
        ...generation_7,
        ...generation_8
    ];
};

export const predicted_data = () => {
    return get_data().map(dataPoke =>{ 
        return {
            name: dataPoke.name, 
            pokedex: dataPoke.number, 
            images: dataPoke.images
        };
    });
};