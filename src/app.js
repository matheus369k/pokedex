import React from 'react';
import { RootLayout } from './root';
import { PokemonDataProvider } from './context/pokemon-datas';

export function App() {
	return (
		<PokemonDataProvider>
			<RootLayout />
		</PokemonDataProvider>
	);
}
