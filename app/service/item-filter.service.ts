
import { Injectable } from '@angular/core';

@Injectable()
export class ItemFilterService {
	
	name: string;

	constructor() {
		this.name = '';
	}
}
