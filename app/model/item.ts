export class Item {
	_id: number;
	name: string;
	imgUri?: string;

	description?: string;
	tags?: string[];
	
	child?: Item[];
}
