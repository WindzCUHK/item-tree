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

	items: Item[];
	selectedItem: Item;

	constructor(
		private router: Router,
		private itemService: ItemService,
		private itemFilterService: ItemFilterService
	) {

	}

	getItems(): void {
		this.itemService.getItems().then(items => this.items = items);
	}

	ngOnInit(): void {
		this.getItems();
	}

	onSelect(item: Item): void {
		this.selectedItem = item;
	}

	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedItem._id]);
	}
}
