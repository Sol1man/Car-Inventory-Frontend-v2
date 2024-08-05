import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CarListComponent } from './car-list/car-list.component';

const routes: Routes = [
  { path: 'car-list', component: CarListComponent },
  { path: 'about-page', component: AboutPageComponent },
  { path: 'add-car', component: AddCarComponent },
  { path: '', redirectTo: '/car-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
