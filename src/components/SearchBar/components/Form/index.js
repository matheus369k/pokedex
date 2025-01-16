import img from '../../../../assets/pokeball.png';
import { searchOfNumber, searchOfName, setUrlState } from '../../../../function/index';
import { BiSearch } from 'react-icons/bi';
import { useFormContext } from 'react-hook-form';
import { useContext } from 'react';
import { PokemonDataContext } from '../../../../context/pokemon-datas';
import styles from './index.module.css';

export function Form() {
	const { handleUpdateData, handleRemoveSelected } = useContext(PokemonDataContext);
	const { register, handleSubmit, reset } = useFormContext();

	function handleSearchPokemon(data) {
		handleRemoveSelected();
		setUrlState('search', data.search);

		if (Number(data.search)) {
			handleUpdateData({
				search: false,
				data: searchOfNumber(data.search, 30),
			});

			reset();
			return;
		}

		handleUpdateData({
			search: data.search !== '',
			data: searchOfName(data.search, 29),
		});
		reset();
	}

	return (
		<form onSubmit={handleSubmit(handleSearchPokemon)} className={styles.form_container}>
			<label htmlFor="search">
				<BiSearch />
			</label>
			<img className="pokeboll" src={img} alt="imagem de uma pokeboll" />
			<input
				maxLength={16}
				autoComplete="off"
				className="search"
				id="search"
				name="search"
				type="text"
				{...register('search')}
				placeholder="Search..."
			/>
		</form>
	);
}
