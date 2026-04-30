import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  vehicles: any = [];

  constructor(private vehicleService: VehicleService) {

    vehicleService.getVehicles().subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal server error");
      }
    )

  }

  term: string = "";
  filterVehicles() {
    this.vehicleService.getFilteredVehicles(this.term).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("internal server error");
      }
    )
  }

  column: string = "";
  order: string = "";

  sortVehicles() {
    this.vehicleService
      .getSortVehicles(this.column, this.order).subscribe(
        (data: any) => {
          this.vehicles = data;
        },
        (err: any) => {
          alert("internal server error");
        }
      )
  }

  pageVehicles(page: number) {
    this.vehicleService.getPagedVehicles(page).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("internal server error");
      }
    )
  }

  getVehiclesWithParams(page:number=1) {
    this.vehicleService.getVehiclesWithParams(this.term, this.column, this.order, page).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("internal server error");
      }
    )

  }

  deleteVehicle(id: string) {
    this.vehicleService.deleteVehicle(id).subscribe(
      (data: any) => {
        alert("deleted succesfully!!!!");
        location.reload();
      },
      (err: any) => {
        alert("delete failed!");
      }
    )
  }

}
