export class Item {
	_id: number;
	name: string;
	imgUri?: string;

	description?: string;
	tags?: string[];
	
	parent: number;
	child?: number[];
}
