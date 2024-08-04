import { Component, OnInit } from '@angular/core';
import { car } from './car.model';
import { CarService } from '../car.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css',


})
export class CarListComponent implements OnInit{
  carList: car[] = [];
  //carList$:   Observable<car[]> | undefined;
  constructor (private carService: CarService){}
  ngOnInit(): void {
    debugger;
    
    this.carService.getAllCars().subscribe((data: car[]) =>
      {
        //this.carList$ = this.carService.getAllCars();
        this.carList = data;
        console.log(this.carList);
      }, error => {
      console.error('Error fetching cars', error);
    });

  }

}
