import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../car.service';
import { car } from '../car-list/car.model';
import { Observable } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css',
})
export class AddCarComponent implements OnInit {
  carForm: FormGroup;
  constructor(private fb: FormBuilder, private carService: CarService) {
    this.carForm = this.fb.group({
      //id: [100, Validators.required],
      name: ['', Validators.required],
      color: [null, Validators.required],
      type: [null, [Validators.required, Validators.min(0), Validators.max(2)]],
      year: [null, Validators.required],
      price: [null, Validators.required],
    });
  }

  ngOnInit(): void {}
  onSubmit(): void {
    if (this.carForm.valid) {
      const formValue: car = this.carForm.value;
      const newCar: car = {
        ...formValue,
        type: +formValue.type, // Convert year to integer
        color: +formValue.color,
        year: +formValue.year, // Convert year to integer
        price: +formValue.price, // Convert price to integer
      };
      console.log(newCar);
      //TODO
      this.carService.addCar(newCar).subscribe({
        next: (response) => {
          console.log('Car Created', response);
        },
        error: (error) => {
          console.log('Error Creating the Car: ', error);
        },
      });
    }
  }
}
