import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { car } from './car-list/car.model';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component'; // Import CarListComponent

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiurl = 'http://localhost:5023/car';
  constructor(private http: HttpClient) {}
  getAllCars(): Observable<car[]> {
    return this.http.get<car[]>(this.apiurl);
  }
  addCar(carToAdd: car): Observable<car> {
    return this.http.post<car>(`${this.apiurl}/AddCar`, carToAdd);
  }
  deleteCar(carId: number): Observable<number> {
    return this.http.delete<number>(`${this.apiurl}/delete/${carId}`);
  }
}
