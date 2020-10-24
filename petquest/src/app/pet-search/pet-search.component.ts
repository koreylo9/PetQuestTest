import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  model = new PetInfo();

  Breeds: string[] = [
    'Golden Retriever',
    'Husky',
    'Labrador',
    'Pomeranian',
    'Poodle'
  ];
  href  = '';

  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.href);
  }

  onSubmit(petForm): void {
    console.log(petForm);
  }
}
