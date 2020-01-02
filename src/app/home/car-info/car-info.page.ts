import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/cars.model';
import { CarService } from 'src/sdk/custom/cars.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.page.html',
  styleUrls: ['./car-info.page.scss'],
})
export class CarInfoPage implements OnInit {
  carInfo: Car;
  loading = true;

  constructor(private carService: CarService,
              private activatedRoute: ActivatedRoute,
              private router: Router
    ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('_id');
    this.carService.getSingleCar(id).subscribe(
      result => {
        this.carInfo = result;
        this.loading = false;
  });
}
}
