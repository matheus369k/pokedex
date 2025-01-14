import img from '../../../../assets/pokeball.png';
import { searchOfNumber, searchOfName } from '../../../../function/index';
import { BiSearch } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { PokemonDataContext } from '../../../../context/pokemon-datas';
import styles from  './index.module.css';

export function Form({ setPredictedData }) {
	const { register, handleSubmit, watch } = useForm();
	const { handleUpdateData, handleRemoveSelected } = useContext(PokemonDataContext);

	watch((data) => {
		if (Number(data.search)) {
			setPredictedData(searchOfNumber(data.search, 3));
			return;
		}

		setPredictedData(searchOfName(data.search, 2));
	});

	const onSubmit = (data) => {
		setPredictedData([]);
		handleRemoveSelected();

		if (Number(data.search)) {
			handleUpdateData({
				search: false,
				data: searchOfNumber(data.search, 30),
			});

			return;
		}

		handleUpdateData({
			search: data.search !== '',
			data: searchOfName(data.search, 29),
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form_container}>
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
