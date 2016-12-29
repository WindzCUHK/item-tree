import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from './model/item';
import { ItemService } from './service/item.service';
import { ItemFilterService } from './service/item-filter.service';

@Component({
	moduleId: module.id,
	selector: 'my-items',
	templateUrl: 'items.component.html',
	styleUrls: [ 'items.component.css' ]
})
export class ItemsComponent implements OnInit {

	leveledItems: Item[][];

	selectedItem: Item;
	navigatingItems: Item[] = [];

	constructor(
		private router: Router,
		private itemService: ItemService,
		private itemFilterService: ItemFilterService
	) {

	}

	loadRootItems(): void {
		this.itemService.getRootItems().then(items => this.leveledItems = [items]);
	}

	ngOnInit(): void {
		this.loadRootItems();
	}

	onSelect(item: Item): void {
		this.selectedItem = item;

		const level = item.level;
		this.navigatingItems.length = level + 1;
		this.navigatingItems[level] = item;
		this.leveledItems.length = level + 1;
		this.itemService.getChildren(item).then(items => this.leveledItems[level + 1] = items);
	}

	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedItem._id]);
	}
}
