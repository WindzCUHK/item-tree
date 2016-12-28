
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ItemFilterService } from './service/item-filter.service';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<nav>
			<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
			<a routerLink="/items" routerLinkActive="active">Items</a>
		</nav>
		<my-item-filter></my-item-filter>
		<router-outlet></router-outlet>
	`
})
export class AppComponent {

	title = 'Tour of Heroes';

	constructor(
		private router: Router
	) {
	}

	// gogogo (baseUrl: string) {
	// 	console.log(baseUrl);
	// 	this.router.navigate([baseUrl], {
	// 		queryParams: {
	// 			filter: this.itemNameFilterValue
	// 		}
	// 	});
	// }
}
