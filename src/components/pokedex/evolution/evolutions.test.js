import { render, screen } from '@testing-library/react';
import { Evolutions } from './evolutions';

describe('Render evolution component', () => {
	test('Normal Condoction', async () => {
		const evolutionData = {
			evolutinLine: 111,
			evolution: [
				{
					name: 'Bulbasaur',
					Lv: 1,
					img: './poke-png-G1/001.png',
				},
				{
					name: 'Ivysaur',
					Lv: 16,
					img: './poke-png-G1/002.png',
				},
				{
					name: 'Venusaur',
					Lv: 32,
					img: './poke-png-G1/003.png',
				},
			],
		};

		render(
			<Evolutions
				dataEvolution={evolutionData.evolution}
				evolutinLine={evolutionData.evolutinLine}
			/>,
		);

		expect(document.querySelector('ul.evolutin-line-111')).not.toBeUndefined();
		expect(document.querySelectorAll('li')).toHaveLength(3);
		expect(await screen.findByText('Bulbasaur'));
		expect(await screen.findByText(1));
		expect(document.querySelectorAll('img')[0].getAttribute('src')).toBe('./poke-png-G1/001.png');
	});
	test('Object Lv is not number', async () => {
		const evolutionData = {
			evolutinLine: 111,
			evolution: [
				{
					name: 'Pichu',
					Lv: 1,
					img: './poke-png-G2/021.png',
				},
				{
					name: 'Pikachu',
					Lv: 'high Friendship',
					img: './poke-png-G1/025.png',
				},
				{
					name: 'Raichu',
					Lv: 'Thunder Stone',
					img: './poke-png-G1/026.png',
				},
			],
		};

		render(
			<Evolutions
				dataEvolution={evolutionData.evolution}
				evolutinLine={evolutionData.evolutinLine}
			/>,
		);

		expect(document.querySelectorAll('li')).toHaveLength(3);
		expect(await screen.findAllByText('level')).toHaveLength(1);
	});
	test('Object LV is equal +', async () => {
		const evolutionData = {
			evolutinLine: 121,
			evolution: [
				{
					name: 'Nincada',
					Lv: 1,
					img: './poke-png-G3/039.png',
				},
				{
					name: 'Ninjask',
					Lv: 20,
					img: './poke-png-G3/040.png',
				},
				{
					name: 'Ninjask',
					Lv: 'Level 20, empty spot in party, Pokéball in bag',
					img: './poke-png-G3/040.png',
				},
				{
					name: 'Shedinja',
					Lv: '+',
					img: './poke-png-G3/041.png',
				},
			],
		};

		render(
			<Evolutions
				dataEvolution={evolutionData.evolution}
				evolutinLine={evolutionData.evolutinLine}
			/>,
		);

		expect(document.querySelectorAll('p')).toHaveLength(7);
	});
});
