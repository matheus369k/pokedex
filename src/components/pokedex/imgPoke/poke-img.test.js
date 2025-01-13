import { render, screen } from '@testing-library/react';
import { PokeImg } from './poke-img';

test('Render image of the pokemon component', async () => {
	const PokeData = {
		name: 'Bulbasaur',
		images: './poke-png-G1/001.png',
	};

	render(<PokeImg dataImages={PokeData.images} dataName={PokeData.name} />);

	expect(await screen.findByRole('img'));
	expect(document.querySelector('img').getAttribute('src')).toBe('./poke-png-G1/001.png');
});
