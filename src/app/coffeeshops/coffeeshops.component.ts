import { Component, OnInit } from '@angular/core';
import { CoffeeShop } from '../coffeeshop';
import { CoffeeShopsCrudService } from '../services/coffee-shops-crud.service';
import { Observable } from 'rxjs';
// import { trigger, state, style, animate, transition } from '@angular/animations';
import { fadeInAnimation } from '../route-animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-coffeeshops',
  templateUrl: './coffeeshops.component.html',
  styleUrls: ['./coffeeshops.component.css'],
  animations: [
    fadeInAnimation
  ]
})
export class CoffeeshopsComponent implements OnInit {


  coffeeShops: CoffeeShop[] = [];

  constructor(private coffeeShopService: CoffeeShopsCrudService) {}

  // create a variable for the coffeeshops array
  coffeeShopsArray$: Observable<CoffeeShop[]> = new Observable<CoffeeShop[]>();

  // remove optional above if issues.

  ngOnInit(): void {

    this.coffeeShopsArray$ = this.coffeeShopService.fetchAllCoffeeShops();
  }

  getCoffeeShops(): void {
    console.log('Button works')

  }


}