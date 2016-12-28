import { Pipe } from "@angular/core";

import { Item } from '../model/item';

@Pipe({
	name: "search"
})
export class SearchPipe {
	transform(value: Item[], itemName: string, parent: Item) {
		console.log(value, itemName, parent);
		if (!value) return;
		return value.filter((item) => {
			return item.name.toLowerCase().indexOf(itemName.toLowerCase()) >= 0;
		});
	}
}
