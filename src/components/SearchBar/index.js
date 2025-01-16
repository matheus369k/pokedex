import { FormProvider, useForm } from 'react-hook-form';
import { Form, Predicted } from './components';
import styles from './index.module.css';
import { getUrlState } from '../../function';

export function Search() {
	const hookForm = useForm({
		defaultValues: {
			search: '',
		},
	});

	return (
		<div className={styles.search_bar_container}>
			<FormProvider {...hookForm}>
				<Form />
				<Predicted />
			</FormProvider>
		</div>
	);
}
