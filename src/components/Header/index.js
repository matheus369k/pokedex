import React, { useContext } from 'react';
import { FcNext } from 'react-icons/fc';
import { FcPrevious } from 'react-icons/fc';
import logo from '../../assets/poke-titulo.png';
import './index.css';
import { get_data } from '../../service/get-data';
import { searchOfNumber } from '../../function/index';
import { Button } from '../index';
import { PokemonDataContext } from '../../context/pokemon-datas';

export function Header() {
	const { state, handleUpdateData, handleAddSelected } = useContext(PokemonDataContext);
	const totalPokemon = state.selected && state.search ? 1 : get_data().length;

	function countPages(page) {
		if (state.selected) {
			return page;
		}
		if (state.search) {
			return 1;
		}
		return Math.ceil(page / 30);
	}

	function currentPage(data) {
		return Number(data[0].number.split('#')[1]);
	}

	function gotToNextPage() {
		if (state.selected) {
			const pokemonNumber = currentPage(state.selected) + 1

			const getPokeDataForNumber = searchOfNumber(pokemonNumber, 1)
			handleAddSelected(getPokeDataForNumber);
			
			return;
		}

		handleUpdateData({
			search: false,
			data: searchOfNumber(currentPage(state.data) + 30, 30),
		});
	}

	function gotToPreviousPage() {
		if (state.selected) {
			const pokemonNumber = currentPage(state.selected) - 1

			const getPokeDataForNumber = searchOfNumber(pokemonNumber, 1)
			handleAddSelected(getPokeDataForNumber);
			
			return;
		}

		handleUpdateData({
			search: false,
			data: searchOfNumber(currentPage(state.data) - 30, 30),
		});
	}

	function verificationStateOfPages() {
		let pokedex = currentPage(state.data);

		if (state.selected) {
			pokedex = currentPage(state.selected);
		}
		
		return countPages(pokedex);
	}

	return (
		<header className="header-container">
			<img src={logo} alt="Logo do site" />
			<div>
				<Button
					id="btn-prevent"
					title="Prevent"
					disabled={verificationStateOfPages() === 1}
					onClick={gotToPreviousPage}
				>
					<FcPrevious />
				</Button>
				<p>
					<span>{verificationStateOfPages()}</span>/<span>{countPages(totalPokemon)}</span>
				</p>
				<Button
					id="btn-next"
					title="Next"
					disabled={verificationStateOfPages() === countPages(totalPokemon)}
					onClick={gotToNextPage}
				>
					<FcNext />
				</Button>
			</div>
		</header>
	);
}