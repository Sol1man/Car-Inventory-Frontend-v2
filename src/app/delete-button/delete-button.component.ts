import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.css',
})
export class DeleteButtonComponent {
  @Input() carId: number | undefined;
  @Output() deleteCar = new EventEmitter<number>();
  @Output() editCar = new EventEmitter<number>();

  onDelete(): void {
    if (confirm(`Sure you want to delete car with id ${this.carId} ?`)) {
      if (this.carId !== undefined) {
        this.deleteCar.emit(this.carId);
      }
    }
  }
  onEdit(): void {
    if (this.carId !== undefined) {
      this.editCar.emit(this.carId);
    }
  }
}
