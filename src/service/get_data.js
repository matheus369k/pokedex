import {
    generation_1,
    generation_2,
    generation_3,
    generation_4,
    generation_5,
    generation_6,
    generation_7,
    generation_8
} from '../data/index'

export default function get_data() {
    return [
        ...generation_1,
        ...generation_2,
        ...generation_3,
        ...generation_4,
        ...generation_5,
        ...generation_6,
        ...generation_7,
        ...generation_8
    ]
}