import { Item } from '../model/item';

export const ITEMS: Item[] = [
	// { _id: 11, name: 'Mr. Nice' },
	// { _id: 12, name: 'Narco' },
	// { _id: 13, name: 'Bombasto' },
	// { _id: 14, name: 'Celeritas' },
	// { _id: 15, name: 'Magneta' },
	// { _id: 16, name: 'RubberMan' },
	// { _id: 17, name: 'Dynama' },
	// { _id: 18, name: 'Dr IQ' },
	// { _id: 19, name: 'Magma', imgUri: '/assert/item/1.jpg' },
	// { _id: 20, name: 'Tornado', imgUri: '/assert/item/2.jpg' },

	{
		_id: 11,
		name: 'p1',
		imgUri: '/assert/item/sheep.jpg',
		description: 'whatever',
		tags: ['parent'],
		parent: null
	},
	{
		_id: 12,
		name: 'p2',
		imgUri: '/assert/item/sheep.jpg',
		description: 'whatever',
		tags: ['parent'],
		parent: null
	},
	{
		_id: 101,
		name: 'c1-1',
		imgUri: '/assert/item/1.jpg',
		description: 'whatever',
		tags: ['ppl'],
		parent: 11
	},
	{
		_id: 102,
		name: 'c1-2',
		imgUri: '/assert/item/1.jpg',
		description: 'whatever',
		parent: 11
	},
	{
		_id: 201,
		name: 'c2-1',
		imgUri: '/assert/item/2.jpg',
		description: 'whatever',
		tags: ['unicon'],
		parent: 12
	},
	{
		_id: 202,
		name: 'c2-2',
		imgUri: '/assert/item/2.jpg',
		description: 'whatever',
		tags: [],
		parent: 12
	},
	{
		_id: 203,
		name: 'c2-3',
		imgUri: '/assert/item/2.jpg',
		description: 'whatever',
		tags: [],
		parent: 12
	},
	{
		_id: 20301,
		name: 'c2-3-1',
		imgUri: '/assert/item/2.jpg',
		description: 'whatever',
		tags: [],
		parent: 203
	},
	{
		_id: 20302,
		name: 'c2-3-2',
		imgUri: '/assert/item/2.jpg',
		description: 'whatever',
		tags: [],
		parent: 203,
		children: []
	}
];



	// {
	// 	_id: 20,
	// 	name: 'temp_name',
	// 	imgUri: '/assert/item/temp_name.jpg',
	// 	description: 'whatever',
	// 	tags: [],
	// 	parent: 999999
	// }
