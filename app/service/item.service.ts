
import { Injectable } from '@angular/core';

import { Item } from '../model/item';
import { ITEMS } from '../mock/mock-items';

const itemDict = {};
// array to map
ITEMS.forEach((item) => {
	itemDict[item._id] = item;
	item.level = 0;
});
// add children relation
ITEMS.forEach((item) => {
	if (item.parent !== null && item.parent !== undefined) {

		const parent = itemDict[item.parent];
		const children = parent.children;
		if (!children) parent.children = [item._id];
		else children.push(item._id);

		item.level = parent.level + 1;
	}
});
console.log(itemDict);

@Injectable()
export class ItemService {
	getItems(): Promise<Item[]> {
		return Promise.resolve(ITEMS);
	}
	getTags(): Promise<string[]> {
		return Promise.resolve(Object.keys(ITEMS
			.map(i => i.tags)
			.filter(tags => (tags && tags.length !== 0))
			.reduce((dict, tags) => {
				tags.forEach(t => dict[t] = true);
				return dict;
			}, {}))
		);
	}

	getRootItems(): Promise<Item[]> {
		return Promise.resolve(ITEMS.filter((item) => {
			return item.level === 0;
		}));
	}
	getItemById(id: number): Promise<Item> {
		return Promise.resolve(itemDict[id]);
	}
	getItemsByIds(ids: number[]): Promise<Item[]> {
		if (ids) return Promise.resolve(ids.map((id) => itemDict[id]));
		else return Promise.resolve([]);
	}
	getChildren(parentItem: Item): Promise<Item[]> {
		return this.getItemsByIds(parentItem.children);
	}
}
