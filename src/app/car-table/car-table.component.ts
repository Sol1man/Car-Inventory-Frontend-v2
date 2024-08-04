import { Component, Input, input, OnInit } from '@angular/core';
import { car } from '../car-list/car.model';
import { CarService } from '../car.service';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs'; // Import Observable


@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrl: './car-table.component.css'
})
export class CarTableComponent implements OnInit{
  @Input() tableCars: car[] = []; // Remove (not used for asynchronous loading)
  displayedColumns: string[] = ['id', 'name', 'color', 'type', 'year', 'price'];
  dataSource = new MatTableDataSource<car>();
  carList$: Observable<car[]> | undefined; // Observable to store car data

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carList$ = this.carService.getAllCars();
    this.carList$.subscribe((data: car[]) => {
      this.dataSource.data = data;
    }, error => {
      console.error('Error fetching cars', error);
    });
  }


}
