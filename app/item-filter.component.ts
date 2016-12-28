
import { Component, Input, OnInit } from '@angular/core';

import { ItemFilterService } from './service/item-filter.service';

@Component({
	moduleId: module.id,
	selector: 'my-item-filter',
	templateUrl: 'item-filter.component.html',
	styleUrls: [ 'item-filter.component.css' ]
})
export class ItemFilterComponent implements OnInit {

	constructor(
		private itemFilterService: ItemFilterService
	) {

	}

	ngOnInit(): void {
		
	}
}
