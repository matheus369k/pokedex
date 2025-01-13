import React, { useContext, useEffect } from 'react';
import { Header, Search, Cards, Pokedex, Button, SearchOfRegions } from '../components/index';
import { RxDoubleArrowUp } from 'react-icons/rx';
import { backScrollTop } from '../function/index';
import { PokemonDataContext } from '../context/pokemon-datas';

export function RootLayout() {
	const { state } = useContext(PokemonDataContext);

	useEffect(() => {
		document.body.addEventListener('scroll', () => {
			const heightScroll = document.body.scrollTop;
			const iconArrowTop = document.getElementById('scrollTop');

			if (heightScroll > 100) iconArrowTop.classList.remove('hide');
			if (heightScroll < 100) iconArrowTop.classList.add('hide');
		});
	}, []);
	return (
		<>
			<Header />
			<Search />
			<main>{state.selected ? <Pokedex /> : <Cards />}</main>
			<SearchOfRegions />
			<Button
				title="Voltar para o inicio"
				onClick={() => backScrollTop()}
				id="scrollTop"
				className="icon-btn-top hide"
			>
				<RxDoubleArrowUp />
			</Button>
		</>
	);
}
