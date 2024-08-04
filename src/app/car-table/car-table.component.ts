import { Component, Input, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { car } from '../car-list/car.model';
import { CarService } from '../car.service';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs'; // Import Observable


@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrl: './car-table.component.css'
})
export class CarTableComponent implements OnInit, OnChanges{
  @Input() tableCars: car[] = []; // Remove (not used for asynchronous loading)
  displayedColumns: string[] = ['id', 'name', 'color', 'type', 'year', 'price'];
  dataSource = new MatTableDataSource<car>();
  carList$: Observable<car[]> | undefined; // Observable to store car data

  constructor(private carService: CarService) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log("*******************************")
    console.log(changes)
    this.dataSource.data = this.tableCars;
    console.log(this.tableCars);
  }

  ngOnInit(): void {
    // setTimeout(()=>{
    //   console.log("-----------------------")

    // },1000)
   
    //console.log(this.tableCars);
   /* this.carList$ = this.carService.getAllCars();
    this.carList$.subscribe((data: car[]) => {
      this.dataSource.data = data;
    }, error => {
      console.error('Error fetching cars', error);
    });*/
  }


}
