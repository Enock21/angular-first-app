import { Component } from '@angular/core';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from '../housingLocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent],
  template: 
  `<app-housing-location [housingLocation]="housingLocation"></app-housing-location>`
})

export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocation: HousingLocation =
  {
    id: 9999,
    name: 'Test Home',
    city: 'Test City',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false
  };
}
