import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CarConfig } from '../car.config';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private http: HttpClient) {}

  public getAllCars(): Observable<any> {
    const url = CarConfig.getPath() + '/cars';

    return this.http.get(url);
  }

 public getSingleCar(id): Observable<any> {
   const url = CarConfig.getPath() + `/cars/${id}`;

   return this.http.get(url);
  }
}
