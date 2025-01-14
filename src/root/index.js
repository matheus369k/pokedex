import React, { useContext, useEffect } from 'react';
import { Header, Search, Cards, Pokedex, Button, SearchOfRegions } from '../components';
import { RxDoubleArrowUp } from 'react-icons/rx';
import { backScrollTop } from '../function/index';
import { PokemonDataContext } from '../context/pokemon-datas';

export function RootLayout() {
	const { state } = useContext(PokemonDataContext);

	useEffect(() => {
		document.body.addEventListener('scroll', () => {
			const heightScroll = document.body.scrollTop;
			const iconArrowTop = document.getElementById('scrollTop');

			if (heightScroll > 100) iconArrowTop.classList.remove('hidden');
			if (heightScroll < 100) iconArrowTop.classList.add('hidden');
		});
	}, []);
	return (
		<>
			<Header />
			<Search />
			<main>{state.selected ? <Pokedex /> : <Cards />}</main>
			<SearchOfRegions />
			<button
				title="Voltar para o inicio"
				onClick={() => backScrollTop()}
				id="scrollTop"
				type='button'
				className="button_back_top hidden"
			>
				<RxDoubleArrowUp />
			</button>
		</>
	);
}
