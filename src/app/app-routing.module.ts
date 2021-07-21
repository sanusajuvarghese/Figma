import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { ViewDataComponent } from './view-data/view-data.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'viewdata', 
    component: ViewDataComponent
  },
  {
		path : 'not-found' , component : HomeComponent
	},
	{
		path : '', redirectTo: 'home', pathMatch : 'full'
	},
	// { path: '**', component:  HomeComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})

export class AppRoutingModule {

}
