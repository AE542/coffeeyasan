import { Component } from '@angular/core';
import { CoffeeShop } from '../coffeeshop';
//import { COFFEESHOPS } from '../mock-coffee-shops';
import { CoffeeShopService } from '../coffee-shop.service';

@Component({
  selector: 'app-coffeeshops',
  templateUrl: './coffeeshops.component.html',
  styleUrls: ['./coffeeshops.component.css']
})
export class CoffeeshopsComponent {

  //coffeeshops = COFFEESHOPS;

  constructor(private coffeeShopService: CoffeeShopService) { }
  // constructor before properties and methods are declared!

// The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.

// When Angular creates a HeroesComponent, the Dependency Injection system sets the heroService parameter to the singleton instance of HeroService.

  coffeeShops: CoffeeShop[] = [];

  selectedCoffeeShop?: CoffeeShop;
  onSelect(coffeeShop: CoffeeShop): void {
    this.selectedCoffeeShop = coffeeShop;

  }
  // we need this so we can call onSelect on the onClick eventHandler in the html

  // create a method to get the coffee shop info from the service

  getCoffeeShops(): void {
    this.coffeeShops = this.coffeeShopService.getCoffeeShops();
  }

  // use a lifecycle method to get the coffee shop instance AFTER constructing the component

  ngOninit(): void {
    this.getCoffeeShops();
  }







 //coffeeShop = 'Archetype'
// coffeeShop: CoffeeShop = {
//   id: 1,
//   name: 'Archetype',
//   description: 'Small Coffee Shop near Great Titchfield St.',
//   location: 'London'
//}
}
