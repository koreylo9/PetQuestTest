import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetDataService {

  constructor() { }
  Dogs = [{name: 'Pet1', breed: 'Poodle', age: '8 months', gender: 'Male', location: 'San Diego, CA'},
  {name: 'Pet2', breed: 'Husky', age: '6 months', gender: 'Male', location: 'San Francisco, CA'},
  {name: 'Pet3', breed: 'Cocker Spaniel', age: '5 months', gender: 'Male', location: 'Merced, CA'},
  {name: 'Pet4', breed: 'Terrier', age: '6 months', gender: 'Female', location: 'Stockton, CA'},
  {name: 'Pet5', breed: 'Pitbull', age: '11 months', gender: 'Female', location: 'Fresno, CA'}];
}
