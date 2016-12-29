
import { Component, Input, OnInit } from '@angular/core';

import { ItemService } from './service/item.service';
import { ItemFilterService } from './service/item-filter.service';

@Component({
	moduleId: module.id,
	selector: 'my-item-filter',
	templateUrl: 'item-filter.component.html',
	styleUrls: [ 'item-filter.component.css' ]
})
export class ItemFilterComponent implements OnInit {

	tags: string[];

	constructor(
		private itemService: ItemService,
		private itemFilterService: ItemFilterService
	) {

	}

	ngOnInit(): void {
		this.itemService.getTags().then(tags => this.tags = tags);
	}
}
