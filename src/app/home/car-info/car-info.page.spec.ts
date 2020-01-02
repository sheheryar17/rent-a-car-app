import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarInfoPage } from './car-info.page';

describe('CarInfoPage', () => {
  let component: CarInfoPage;
  let fixture: ComponentFixture<CarInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
