import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CarListComponent } from './car-list/car-list.component'; // Import CarListComponent
import { CarService } from './car.service';

import { MatTableModule } from '@angular/material/table';
import { CarTableComponent } from './car-table/car-table.component';
import { MatTableDataSource } from '@angular/material/table';

import { MenuComponent } from './menu/menu.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AddCarComponent } from './add-car/add-car.component';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarTableComponent,
    MenuComponent,
    SideMenuComponent,
    AddCarComponent,
    AboutPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatTabsModule,
  ],
  providers: [CarService, provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
