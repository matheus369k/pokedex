import { createContext, useReducer } from 'react';
import { get_data } from '../service/get-data';
import { backScrollTop, getUrlState, searchOfName, searchOfNumber, setUrlState } from '../function';
import { generation_1 } from '../data';
import { useScroll } from '../hooks/use-scroll';

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_SELECTED':
			return {
				...state,
				search: false,
				selected: action.payload,
			};
		case 'REMOVE_SELECTED':
			return {
				...state,
				selected: null,
			};
		case 'UPDATE_DATA':
			return {
				...state,
				search: action.payload.search,
				data: action.payload.data,
			};
		default:
			return state;
	}
};

const handleInitialState = (state) => {
	const searchPokemon = getUrlState('id');
	const pokedexIs = getUrlState('pokedex');

	if (Number(searchPokemon)) {
		return {
			selected: pokedexIs === 'open' ? searchOfNumber(searchPokemon, 1) : null,
			search: false,
			data: searchOfNumber(Number(searchPokemon), 30),
		};
	}

	if (searchPokemon) {
		return { ...state, search: true, data: searchOfName(searchPokemon, 29) };
	}

	return state;
};

export const PokemonDataContext = createContext({});

export function PokemonDataProvider({ children }) {
	const {handleBackScrollToInitialPosition} = useScroll();
	const [state, dispatch] = useReducer(
		reducer,
		{
			selected: null,
			search: false,
			data: generation_1.slice(0, 30),
		},
		handleInitialState,
	);

	function handleUpdateStateOfPage({key, value}) {
		handleBackScrollToInitialPosition();
		setUrlState(key, value);
	}

	function handleAddSelected(payload) {
		handleUpdateStateOfPage({key: 'pokedex', value: 'open'});
		dispatch({ type: 'ADD_SELECTED', payload });
	}

	function handleRemoveSelected() {
		handleUpdateStateOfPage({key: 'pokedex', value: 'closed'});
		dispatch({ type: 'REMOVE_SELECTED' });
	}

	function handleUpdateData(payload) {
		handleUpdateStateOfPage({key: 'pokedex', value: 'closed'});
		dispatch({ type: 'UPDATE_DATA', payload });
	}

	return (
		<PokemonDataContext.Provider
			value={{ state, handleUpdateData, handleRemoveSelected, handleAddSelected }}
		>
			{children}
		</PokemonDataContext.Provider>
	);
}
