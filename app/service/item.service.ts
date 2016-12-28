
import { Injectable } from '@angular/core';

import { Item } from '../model/item';
import { ITEMS } from '../mock/mock-items';

@Injectable()
export class ItemService {
	getItems(): Promise<Item[]> {
		return Promise.resolve(ITEMS);
	}
	getItem(id: number): Promise<Item> {
		return this.getItems()
			.then(items => items.find(item => item._id === id));
	}

	getRootItems(): Promise<Item[]> {
		return Promise.resolve(ITEMS.filter((item) => {
			return !item.parent;
		}));
	}
	getItemsByIds(ids: number[]): Promise<Item[]> {
		return Promise.resolve(ids.map((id) => ITEMS.find(item => item._id === id)));
	}
	getChildren(parentItem: Item): Promise<Item[]> {
		return this.getItemsByIds(parentItem.children);
	}
}
