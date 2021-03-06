import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { ItemsComponent } from './items.component';
import { DashboardComponent } from './dashboard.component';
import { ItemDetailComponent } from './item-detail.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'detail/:id', component: ItemDetailComponent },
	{ path: 'items', component: ItemsComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
