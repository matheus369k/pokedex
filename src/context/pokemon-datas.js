import { createContext, useReducer } from 'react';
import { get_data } from '../service/get-data';
import { backScrollTop, getUrlState, searchOfName, searchOfNumber, setUrlState } from '../function';
import { generation_1 } from '../data';
import { useScroll } from '../hooks/use-scroll';
import { removeUrlState } from '../function/url-state';

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
				search: action.payload.search,
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
	const searchPokemon = getUrlState('search');
	const searchPokedex = getUrlState('selected');
	let contextData = {};

	if (Number(searchPokemon)) {
		contextData = {
			search: true,
			data: searchOfNumber(Number(searchPokemon), 30),
		};
	}

	if (!Number(searchPokemon) && searchPokemon !== null) {
		contextData = {
			search: true,
			data: searchOfName(searchPokemon, 29),
		};
	}

	if (searchPokedex) {
		contextData = {
			...contextData,
			search: false,
			selected: searchOfNumber(searchPokedex, 1),
		};
	}

	return {
		...state,
		...contextData,
	};
};

export const PokemonDataContext = createContext({});

export function PokemonDataProvider({ children }) {
	const { handleBackScrollToInitialPosition } = useScroll();
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
		setUrlState('selected', payload[0].number.split('#')[1]);
		dispatch({ type: 'ADD_SELECTED', payload });
		handleBackScrollToInitialPosition();
	}

	function handleRemoveSelected() {
		const hasSearchPoke = !!getUrlState('search');
		dispatch({ type: 'REMOVE_SELECTED', payload: {
			search: hasSearchPoke,
		} });

		handleBackScrollToInitialPosition();
		removeUrlState('selected');
	}

	function handleUpdateData(payload) {
		dispatch({ type: 'UPDATE_DATA', payload });

		handleBackScrollToInitialPosition();
		removeUrlState('selected');
	}

	return (
		<PokemonDataContext.Provider
			value={{ state, handleUpdateData, handleRemoveSelected, handleAddSelected }}
		>
			{children}
		</PokemonDataContext.Provider>
	);
}
