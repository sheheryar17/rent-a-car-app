import { Component, OnInit } from '@angular/core';
import { Car } from '../cars.model';
import { Router } from '@angular/router';
import { CarService } from 'src/sdk/custom/cars.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, private carService: CarService) {}
  cars: Car[];
  loading;

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.loading = true;

    this.carService.getAllCars().subscribe(
      data => {
        console.log('got response from server', data);
        this.loading = false;
        this.cars = data.data.docs;
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }
  navigate(id: any) {
      this.router.navigateByUrl('/car-info/' + id);  }

}
