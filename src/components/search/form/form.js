import img from '../../../assets/pokeball.png';
import { get_data, predicted_data } from '../../../service/get-data';
import { searchOfNumber, searchOfName } from '../../../function/index';
import { BiSearch } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import './index.css';
import { useContext } from 'react';
import { PokemonDataContext } from '../../../context/pokemon-datas';

export function Form({ setPredictedData }) {
	const { register, handleSubmit, watch } = useForm();
	const { handleUpdateData, handleRemoveSelected } = useContext(PokemonDataContext);

	watch((data) => {
		const pokemonsAllPredicted = predicted_data();

		if (Number(data.search))
			return setPredictedData(searchOfNumber(data.search, pokemonsAllPredicted, 3));

		return setPredictedData(searchOfName(data.search, pokemonsAllPredicted, 2));
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
		<form onSubmit={handleSubmit(onSubmit)} className="form_container">
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
