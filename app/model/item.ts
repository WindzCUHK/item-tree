export class Item {
	_id: number;
	name: string;
	imgUri?: string;

	description?: string;
	tags?: string[];
	
	level?: number;
	parent?: number;
	children?: number[];
}
