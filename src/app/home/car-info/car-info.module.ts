import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarInfoPageRoutingModule } from './car-info-routing.module';

import { CarInfoPage } from './car-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarInfoPageRoutingModule
  ],
  declarations: [CarInfoPage]
})
export class CarInfoPageModule {}
