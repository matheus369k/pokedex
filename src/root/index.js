import React, { useContext, useEffect } from 'react';
import { Header, Search, Cards, Pokedex, Button, SearchOfRegions } from '../components';
import { RxDoubleArrowUp } from 'react-icons/rx';
import { backScrollTop } from '../function/index';
import { PokemonDataContext } from '../context/pokemon-datas';
import { useScroll } from '../hooks/use-scroll';

export function RootLayout() {
	const { state } = useContext(PokemonDataContext);
	const { isInitialScroll, handleBackScrollToInitialPosition } = useScroll();

	return (
		<>
			<Header />
			<Search />
			<main>{state.selected ? <Pokedex /> : <Cards />}</main>
			<SearchOfRegions />
			<button
				title="Voltar para o inicio"
				onClick={handleBackScrollToInitialPosition}
				type="button"
				className={`button_back_top ${isInitialScroll ? 'hidden' : ''}`}
			>
				<RxDoubleArrowUp />
			</button>
		</>
	);
}
