
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Item } from './model/item';
import { ItemService } from './service/item.service';

import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
	selector: 'my-item-detail',
	templateUrl: 'item-detail.component.html',
	styleUrls: [ 'item-detail.component.css' ]
})
export class ItemDetailComponent implements OnInit {
	@Input() item: Item;

	constructor(
		private itemService: ItemService,
		private route: ActivatedRoute,
		private location: Location
	) {
		
	}

	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => this.itemService.getItem(parseInt(params['id'], 10)))
			.subscribe(item => this.item = item);
	}

	goBack(): void {
		this.location.back();
	}
}
