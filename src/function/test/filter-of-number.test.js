import { searchOfNumber } from '../filter-of-number';

describe('Filter of Number', () => {
	const AllDataCards = [
		{
			name: 'Bulbasaur',
			number: '#0001',
			types: [
				{
					type: 'Grama',
				},
				{
					type: 'Veneno',
				},
			],
			images: './poke-png-G1/001.png',
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
			superdamange: [
				{
					type: 'Fogo',
				},
				{
					type: 'Gelo',
				},
				{
					type: 'Pisquico',
				},
				{
					type: 'Voador',
				},
			],
			baseStats: {
				HP: 45,
				Atack: 49,
				Defense: 49,
				'Sp.atack': 65,
				'Sp.Def': 65,
				Speed: 45,
			},
			description:
				'Uma estranha semente foi plantada em suas costas em seu nascimento. A planta brota e cresce com este Pokémon. Por algum tempo depois de seu nascimento, cresce ganhando nutrição da semente em suas costas.',
		},
		{
			name: 'Ivysaur',
			number: '#0002',
			types: [
				{
					type: 'Grama',
				},
				{
					type: 'Veneno',
				},
			],
			images: './poke-png-G1/002.png',
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
			superdamange: [
				{
					type: 'Fogo',
				},
				{
					type: 'Gelo',
				},
				{
					type: 'Pisquico',
				},
				{
					type: 'Voador',
				},
			],
			baseStats: {
				HP: 60,
				Atack: 62,
				Defense: 63,
				'Sp.atack': 80,
				'Sp.Def': 80,
				Speed: 60,
			},
			description:
				'Ha um broto nas costas desse  pokemon. Para suportar seu peso, as pernas e o tronco do ivysaur fica grossos e fortes se começar a passar mais tempo sob a luz do sol é um sinal que o broto florecerá em uma flor grande em breve.',
		},
		{
			name: 'Venusaur',
			number: '#0003',
			types: [
				{
					type: 'Grama',
				},
				{
					type: 'Veneno',
				},
			],
			images: './poke-png-G1/003.png',
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
			superdamange: [
				{
					type: 'Fogo',
				},
				{
					type: 'Gelo',
				},
				{
					type: 'Pisquico',
				},
				{
					type: 'Voador',
				},
			],
			baseStats: {
				HP: 80,
				Atack: 82,
				Defense: 83,
				'Sp.atack': 100,
				'Sp.Def': 100,
				Speed: 80,
			},
			description:
				'Há uma grande flor nas costas de Venusaur. Diz-se que a flor assume cores vivas se receber muita nutrição e luz solar. O aroma da flor acalma as emoções das pessoas. Sua planta floresce quando está absorvendo energia solar. Ele permanece em movimento para buscar a luz solar.',
		},
		{
			name: 'Charmander',
			number: '#0004',
			types: [
				{
					type: 'Fogo',
				},
			],
			images: './poke-png-G1/004.png',
			evolutinLine: 111,
			evolution: [
				{
					name: 'Charmander',
					Lv: 1,
					img: './poke-png-G1/004.png',
				},
				{
					name: 'Charmeleon',
					Lv: 16,
					img: './poke-png-G1/005.png',
				},
				{
					name: 'Charizard',
					Lv: 32,
					img: './poke-png-G1/006.png',
				},
			],
			superdamange: [
				{
					type: 'Agua',
				},
				{
					type: 'Terra',
				},
				{
					type: 'Rocha',
				},
			],
			baseStats: {
				HP: 39,
				Atack: 52,
				Defense: 43,
				'Sp.atack': 60,
				'Sp.Def': 50,
				Speed: 65,
			},
			description:
				'Charmander e um Pokémon Lagarto que desde de seu nascimento possui uma chama que queima na ponta de sua cauda, ela simboliza sua alegria e saúde contudo se ela apagar Charmander morrerá.Quando chove, diz-se que o vapor jorra da ponta da sua cauda.',
		},
		{
			name: 'Charmeleon',
			number: '#0005',
			types: [
				{
					type: 'Fogo',
				},
			],
			images: './poke-png-G1/005.png',
			evolutinLine: 111,
			evolution: [
				{
					name: 'Charmander',
					Lv: 1,
					img: './poke-png-G1/004.png',
				},
				{
					name: 'Charmeleon',
					Lv: 16,
					img: './poke-png-G1/005.png',
				},
				{
					name: 'Charizard',
					Lv: 32,
					img: './poke-png-G1/006.png',
				},
			],
			superdamange: [
				{
					type: 'Agua',
				},
				{
					type: 'Terra',
				},
				{
					type: 'Rocha',
				},
			],
			baseStats: {
				HP: 58,
				Atack: 64,
				Defense: 58,
				'Sp.atack': 80,
				'Sp.Def': 65,
				Speed: 80,
			},
			description:
				'Gosta muito de brigas, por isso busca constantemente por adversários. Ele ataca com suas garras afiadas e usando sua cauda como chicote de fogo. Pode soltar chamas azuis quando muito animado.',
		},
		{
			name: 'Charizard',
			number: '#0006',
			types: [
				{
					type: 'Fogo',
				},
				{
					type: 'Voador',
				},
			],
			images: './poke-png-G1/006.png',
			evolutinLine: 111,
			evolution: [
				{
					name: 'Charmander',
					Lv: 1,
					img: './poke-png-G1/004.png',
				},
				{
					name: 'Charmeleon',
					Lv: 16,
					img: './poke-png-G1/005.png',
				},
				{
					name: 'Charizard',
					Lv: 32,
					img: './poke-png-G1/006.png',
				},
			],
			superdamange: [
				{
					type: 'Agua',
				},
				{
					type: 'Eletrico',
				},
				{
					type: 'Rocha',
				},
			],
			baseStats: {
				HP: 78,
				Atack: 84,
				Defense: 78,
				'Sp.atack': 109,
				'Sp.Def': 85,
				Speed: 100,
			},
			description:
				'Seu fogo é quente o suficiente para derreter rochas. Quando nervoso, a chama em sua cauda queimará intensamente. É orgulhoso e voa pelos céus em busca de adversários poderosos.',
		},
		{
			name: 'Squirtle',
			number: '#0007',
			types: [
				{
					type: 'Agua',
				},
			],
			images: './poke-png-G1/007.png',
			evolutinLine: 111,
			evolution: [
				{
					name: 'Squirtle',
					Lv: 1,
					img: './poke-png-G1/007.png',
				},
				{
					name: 'Wartortle',
					Lv: 16,
					img: './poke-png-G1/008.png',
				},
				{
					name: 'Blastoise',
					Lv: 32,
					img: './poke-png-G1/009.png',
				},
			],
			superdamange: [
				{
					type: 'Eletrico',
				},
				{
					type: 'Grama',
				},
			],
			baseStats: {
				HP: 44,
				Atack: 48,
				Defense: 65,
				'Sp.atack': 50,
				'Sp.Def': 64,
				Speed: 43,
			},
			description:
				'Quando nasce, seu casco é mole, mas logo endurece. Cutucando com o dedo fará os pedaços de seu casco saltar. Ele entra dentro do casco quando se sente ameaçado.',
		},
		{
			name: 'Wartortle',
			number: '#0008',
			types: [
				{
					type: 'Agua',
				},
			],
			images: './poke-png-G1/008.png',
			evolutinLine: 111,
			evolution: [
				{
					name: 'Squirtle',
					Lv: 1,
					img: './poke-png-G1/007.png',
				},
				{
					name: 'Wartortle',
					Lv: 16,
					img: './poke-png-G1/008.png',
				},
				{
					name: 'Blastoise',
					Lv: 32,
					img: './poke-png-G1/009.png',
				},
			],
			superdamange: [
				{
					type: 'Eletrico',
				},
				{
					type: 'Grama',
				},
			],
			baseStats: {
				HP: 59,
				Atack: 63,
				Defense: 80,
				'Sp.atack': 65,
				'Sp.Def': 80,
				Speed: 58,
			},
			description:
				'É muito inteligente, sabe controlar as orelhas e o rabo para manter o equilíbrio na água e nadar em altas velocidades. Seu rabo felpudo é símbolo de longevidade.',
		},
		{
			name: 'Blastoise',
			number: '#0009',
			types: [
				{
					type: 'Agua',
				},
			],
			images: './poke-png-G1/009.png',
			evolutinLine: 111,
			evolution: [
				{
					name: 'Squirtle',
					Lv: 1,
					img: './poke-png-G1/007.png',
				},
				{
					name: 'Wartortle',
					Lv: 16,
					img: './poke-png-G1/008.png',
				},
				{
					name: 'Blastoise',
					Lv: 32,
					img: './poke-png-G1/009.png',
				},
			],
			superdamange: [
				{
					type: 'Eletrico',
				},
				{
					type: 'Grama',
				},
			],
			baseStats: {
				HP: 79,
				Atack: 83,
				Defense: 100,
				'Sp.atack': 85,
				'Sp.Def': 105,
				Speed: 78,
			},
			description:
				'Um Pokémon brutal com jatos de água pressurizada em sua concha. Eles são usadas ​​para ataques em alta velocidade. Os bicos de água são muito precisos.',
		},
		{
			name: 'Caterpie',
			number: '#0010',
			types: [
				{
					type: 'Inseto',
				},
			],
			images: './poke-png-G1/010.png',
			evolutinLine: 111,
			evolution: [
				{
					name: 'Caterpie',
					Lv: 1,
					img: './poke-png-G1/010.png',
				},
				{
					name: 'Metapod',
					Lv: 7,
					img: './poke-png-G1/011.png',
				},
				{
					name: 'Butterfree',
					Lv: 10,
					img: './poke-png-G1/012.png',
				},
			],
			superdamange: [
				{
					type: 'Fogo',
				},
				{
					type: 'Voador',
				},
				{
					type: 'Rocha',
				},
			],
			baseStats: {
				HP: 45,
				Atack: 30,
				Defense: 35,
				'Sp.atack': 20,
				'Sp.Def': 20,
				Speed: 45,
			},
			description:
				'Caterpie Como forma de  proteção, Caterpie libera um cheiro horrível através de suas antenas. Suas patas pegajosas são capazes de andar em qualquer tipo de superfície.',
		},
		{
			name: 'Metapod',
			number: '#0011',
			types: [
				{
					type: 'Inseto',
				},
			],
			images: './poke-png-G1/011.png',
			evolutinLine: 111,
			evolution: [
				{
					name: 'Caterpie',
					Lv: 1,
					img: './poke-png-G1/010.png',
				},
				{
					name: 'Metapod',
					Lv: 7,
					img: './poke-png-G1/011.png',
				},
				{
					name: 'Butterfree',
					Lv: 10,
					img: './poke-png-G1/012.png',
				},
			],
			superdamange: [
				{
					type: 'Fogo',
				},
				{
					type: 'Voador',
				},
				{
					type: 'Rocha',
				},
			],
			baseStats: {
				HP: 50,
				Atack: 20,
				Defense: 55,
				'Sp.atack': 25,
				'Sp.Def': 25,
				Speed: 30,
			},
			description:
				'Metapod tem a concha que cobre o corpo deste Pokémon é tão dura quanto uma laje de ferro. Metapod não se move muito. Ele fica parado porque está preparando suas entranhas suaves para a evolução dentro da casca dura.',
		},
		{
			name: 'Butterfree',
			number: '#0012',
			types: [
				{
					type: 'Inseto',
				},
				{
					type: 'Voador',
				},
			],
			images: './poke-png-G1/012.png',
			evolutinLine: 111,
			evolution: [
				{
					name: 'Caterpie',
					Lv: 1,
					img: './poke-png-G1/010.png',
				},
				{
					name: 'Metapod',
					Lv: 7,
					img: './poke-png-G1/011.png',
				},
				{
					name: 'Butterfree',
					Lv: 10,
					img: './poke-png-G1/012.png',
				},
			],
			superdamange: [
				{
					type: 'Fogo',
				},
				{
					type: 'Eletrico',
				},
				{
					type: 'Gelo',
				},
				{
					type: 'Voador',
				},
				{
					type: 'Rocha',
				},
			],
			baseStats: {
				HP: 60,
				Atack: 45,
				Defense: 50,
				'Sp.atack': 90,
				'Sp.Def': 80,
				Speed: 70,
			},
			description:
				'Butterfree tem o corpo da cor azul-púrpura escuro. Ele tem grandes asas veias, que são brancas com manchas pretas. Ele também possue olhos compostos grandes que tendem a ser uma cor avermelhada, suas pernas são cobertas de pêlos finos, o que ajuda na coleta de mel.',
		},
	];

	test('Of search', () => {
		const expectativeMinusSix = [
			{
				name: 'Charizard',
				number: '#0006',
				types: [
					{
						type: 'Fogo',
					},
					{
						type: 'Voador',
					},
				],
				images: './poke-png-G1/006.png',
				evolutinLine: 111,
				evolution: [
					{
						name: 'Charmander',
						Lv: 1,
						img: './poke-png-G1/004.png',
					},
					{
						name: 'Charmeleon',
						Lv: 16,
						img: './poke-png-G1/005.png',
					},
					{
						name: 'Charizard',
						Lv: 32,
						img: './poke-png-G1/006.png',
					},
				],
				superdamange: [
					{
						type: 'Agua',
					},
					{
						type: 'Eletrico',
					},
					{
						type: 'Rocha',
					},
				],
				baseStats: {
					HP: 78,
					Atack: 84,
					Defense: 78,
					'Sp.atack': 109,
					'Sp.Def': 85,
					Speed: 100,
				},
				description:
					'Seu fogo é quente o suficiente para derreter rochas. Quando nervoso, a chama em sua cauda queimará intensamente. É orgulhoso e voa pelos céus em busca de adversários poderosos.',
			},
		];

		expect(searchOfNumber('6', AllDataCards, 1)).toEqual(expectativeMinusSix);
	});
	test('Of page', () => {
		const expectativePlusSix = [
			{
				name: 'Squirtle',
				number: '#0007',
				types: [
					{
						type: 'Agua',
					},
				],
				images: './poke-png-G1/007.png',
				evolutinLine: 111,
				evolution: [
					{
						name: 'Squirtle',
						Lv: 1,
						img: './poke-png-G1/007.png',
					},
					{
						name: 'Wartortle',
						Lv: 16,
						img: './poke-png-G1/008.png',
					},
					{
						name: 'Blastoise',
						Lv: 32,
						img: './poke-png-G1/009.png',
					},
				],
				superdamange: [
					{
						type: 'Eletrico',
					},
					{
						type: 'Grama',
					},
				],
				baseStats: {
					HP: 44,
					Atack: 48,
					Defense: 65,
					'Sp.atack': 50,
					'Sp.Def': 64,
					Speed: 43,
				},
				description:
					'Quando nasce, seu casco é mole, mas logo endurece. Cutucando com o dedo fará os pedaços de seu casco saltar. Ele entra dentro do casco quando se sente ameaçado.',
			},
			{
				name: 'Wartortle',
				number: '#0008',
				types: [
					{
						type: 'Agua',
					},
				],
				images: './poke-png-G1/008.png',
				evolutinLine: 111,
				evolution: [
					{
						name: 'Squirtle',
						Lv: 1,
						img: './poke-png-G1/007.png',
					},
					{
						name: 'Wartortle',
						Lv: 16,
						img: './poke-png-G1/008.png',
					},
					{
						name: 'Blastoise',
						Lv: 32,
						img: './poke-png-G1/009.png',
					},
				],
				superdamange: [
					{
						type: 'Eletrico',
					},
					{
						type: 'Grama',
					},
				],
				baseStats: {
					HP: 59,
					Atack: 63,
					Defense: 80,
					'Sp.atack': 65,
					'Sp.Def': 80,
					Speed: 58,
				},
				description:
					'É muito inteligente, sabe controlar as orelhas e o rabo para manter o equilíbrio na água e nadar em altas velocidades. Seu rabo felpudo é símbolo de longevidade.',
			},
			{
				name: 'Blastoise',
				number: '#0009',
				types: [
					{
						type: 'Agua',
					},
				],
				images: './poke-png-G1/009.png',
				evolutinLine: 111,
				evolution: [
					{
						name: 'Squirtle',
						Lv: 1,
						img: './poke-png-G1/007.png',
					},
					{
						name: 'Wartortle',
						Lv: 16,
						img: './poke-png-G1/008.png',
					},
					{
						name: 'Blastoise',
						Lv: 32,
						img: './poke-png-G1/009.png',
					},
				],
				superdamange: [
					{
						type: 'Eletrico',
					},
					{
						type: 'Grama',
					},
				],
				baseStats: {
					HP: 79,
					Atack: 83,
					Defense: 100,
					'Sp.atack': 85,
					'Sp.Def': 105,
					Speed: 78,
				},
				description:
					'Um Pokémon brutal com jatos de água pressurizada em sua concha. Eles são usadas ​​para ataques em alta velocidade. Os bicos de água são muito precisos.',
			},
			{
				name: 'Caterpie',
				number: '#0010',
				types: [
					{
						type: 'Inseto',
					},
				],
				images: './poke-png-G1/010.png',
				evolutinLine: 111,
				evolution: [
					{
						name: 'Caterpie',
						Lv: 1,
						img: './poke-png-G1/010.png',
					},
					{
						name: 'Metapod',
						Lv: 7,
						img: './poke-png-G1/011.png',
					},
					{
						name: 'Butterfree',
						Lv: 10,
						img: './poke-png-G1/012.png',
					},
				],
				superdamange: [
					{
						type: 'Fogo',
					},
					{
						type: 'Voador',
					},
					{
						type: 'Rocha',
					},
				],
				baseStats: {
					HP: 45,
					Atack: 30,
					Defense: 35,
					'Sp.atack': 20,
					'Sp.Def': 20,
					Speed: 45,
				},
				description:
					'Caterpie Como forma de  proteção, Caterpie libera um cheiro horrível através de suas antenas. Suas patas pegajosas são capazes de andar em qualquer tipo de superfície.',
			},
			{
				name: 'Metapod',
				number: '#0011',
				types: [
					{
						type: 'Inseto',
					},
				],
				images: './poke-png-G1/011.png',
				evolutinLine: 111,
				evolution: [
					{
						name: 'Caterpie',
						Lv: 1,
						img: './poke-png-G1/010.png',
					},
					{
						name: 'Metapod',
						Lv: 7,
						img: './poke-png-G1/011.png',
					},
					{
						name: 'Butterfree',
						Lv: 10,
						img: './poke-png-G1/012.png',
					},
				],
				superdamange: [
					{
						type: 'Fogo',
					},
					{
						type: 'Voador',
					},
					{
						type: 'Rocha',
					},
				],
				baseStats: {
					HP: 50,
					Atack: 20,
					Defense: 55,
					'Sp.atack': 25,
					'Sp.Def': 25,
					Speed: 30,
				},
				description:
					'Metapod tem a concha que cobre o corpo deste Pokémon é tão dura quanto uma laje de ferro. Metapod não se move muito. Ele fica parado porque está preparando suas entranhas suaves para a evolução dentro da casca dura.',
			},
			{
				name: 'Butterfree',
				number: '#0012',
				types: [
					{
						type: 'Inseto',
					},
					{
						type: 'Voador',
					},
				],
				images: './poke-png-G1/012.png',
				evolutinLine: 111,
				evolution: [
					{
						name: 'Caterpie',
						Lv: 1,
						img: './poke-png-G1/010.png',
					},
					{
						name: 'Metapod',
						Lv: 7,
						img: './poke-png-G1/011.png',
					},
					{
						name: 'Butterfree',
						Lv: 10,
						img: './poke-png-G1/012.png',
					},
				],
				superdamange: [
					{
						type: 'Fogo',
					},
					{
						type: 'Eletrico',
					},
					{
						type: 'Gelo',
					},
					{
						type: 'Voador',
					},
					{
						type: 'Rocha',
					},
				],
				baseStats: {
					HP: 60,
					Atack: 45,
					Defense: 50,
					'Sp.atack': 90,
					'Sp.Def': 80,
					Speed: 70,
				},
				description:
					'Butterfree tem o corpo da cor azul-púrpura escuro. Ele tem grandes asas veias, que são brancas com manchas pretas. Ele também possue olhos compostos grandes que tendem a ser uma cor avermelhada, suas pernas são cobertas de pêlos finos, o que ajuda na coleta de mel.',
			},
		];

		expect(searchOfNumber(8, AllDataCards, 6)).toEqual(expectativePlusSix);
	});
});
