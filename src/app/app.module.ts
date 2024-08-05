import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CarListComponent } from './car-list/car-list.component'; // Import CarListComponent
import { CarService } from './car.service';

import {MatTableModule}   from '@angular/material/table';
import { CarTableComponent } from './car-table/car-table.component';
import { MatTableDataSource } from '@angular/material/table';

import { MenuComponent } from './menu/menu.component';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarTableComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatTabsModule,
  ],
  providers: [
    CarService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
