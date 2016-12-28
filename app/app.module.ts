
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { ItemsComponent } from './items.component';
import { ItemDetailComponent } from './item-detail.component';
import { ItemFilterComponent } from './item-filter.component';

import { SearchPipe } from './pipe/search-pipe';

import { ItemService } from './service/item.service';
import { ItemFilterService } from './service/item-filter.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		DashboardComponent,
		ItemsComponent,
		ItemDetailComponent,
		ItemFilterComponent,
		SearchPipe
	],
	providers: [
		ItemService,
		ItemFilterService
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
