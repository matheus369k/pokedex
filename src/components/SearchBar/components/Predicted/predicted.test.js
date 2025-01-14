import { render, screen } from '@testing-library/react';
import { Predicted } from './predicted';

const getPredictedData = [
	{
		name: 'Bulbasaur',
		pokedex: '#0001',
		images: './poke-png-G1/001.png',
	},
];

const setPredictedData = jest.fn();
const setPokedex = jest.fn();

describe('Predicate', () => {
	render(
		<Predicted
			getPredictedData={getPredictedData}
			setPredictedData={setPredictedData}
			setPokedex={setPokedex}
		/>,
	);

	test('Render component search-predicate', async () => {
		expect(await screen.findByText('Bulbasaur'));
		expect(await screen.findByText('#0001'));
		expect(await screen.findAllByRole('img')).toHaveLength(2);

		expect(document.querySelector('img').getAttribute('src')).toBe('./poke-png-G1/001.png');
	});
	test('Close list of the predicted', () => {
		document.body.click();

		expect(setPredictedData).toHaveBeenCalled();
	});
});
