import { Component, OnInit } from '@angular/core';

import { Item } from './model/item';
import { ItemService } from './service/item.service';
import { ItemFilterService } from './service/item-filter.service';

@Component({
	moduleId: module.id,
	selector: 'my-dashboard',
	templateUrl: 'dashboard.component.html',
	styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

	items: Item[];

	constructor(
		private itemService: ItemService,
		private itemFilterService: ItemFilterService
	) {

	}

	ngOnInit(): void {
		this.itemService.getItems().then(items => this.items = items);
	}
}
