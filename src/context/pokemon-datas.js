import { createContext, useReducer } from 'react';
import { get_data } from '../service/get-data';
import { backScrollTop, getUrlState, searchOfName, searchOfNumber, setUrlState } from '../function';
import { generation_1 } from '../data';

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_SELECTED':
			return {
				...state,
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
			selected: pokedexIs === 'open' ? searchOfNumber(searchPokemon, get_data(), 1) : null,
			search: false,
			data: searchOfNumber(Number(searchPokemon), get_data(), 30),
		};
	}

	if (searchPokemon) {
		return { ...state, search: true, data: searchOfName(searchPokemon, get_data(), 29) };
	}

	return state;
};

export const PokemonDataContext = createContext({});

export function PokemonDataProvider({ children }) {
	const [state, dispatch] = useReducer(
		reducer,
		{
			selected: null,
			search: false,
			data: generation_1.slice(0, 30),
		},
		handleInitialState,
	);

	function handleAddSelected(payload) {
		backScrollTop();
		setUrlState('pokedex', 'open');
		dispatch({ type: 'ADD_SELECTED', payload });
	}

	function handleRemoveSelected() {
		backScrollTop();
		setUrlState('pokedex', 'closed');
		dispatch({ type: 'REMOVE_SELECTED' });
	}

	function handleUpdateData(payload) {
		backScrollTop();
		setUrlState('pokedex', 'closed');
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
