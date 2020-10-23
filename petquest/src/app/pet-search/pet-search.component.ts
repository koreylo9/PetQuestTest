import { Component, OnInit } from '@angular/core';

export class PetInfo {
  public breed: string;
  public age: string;
  public size: string;
  public gender: string;
}

@Component({
  selector: 'app-pet-search',
  templateUrl: './pet-search.component.html',
  styleUrls: ['./pet-search.component.css']
})
export class PetSearchComponent implements OnInit {

  constructor() { }

  model = new PetInfo();

  ngOnInit(): void {
  }

  onSubmit(petForm): void {
    console.log(petForm);
  }
}
