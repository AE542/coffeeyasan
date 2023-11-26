import { Component } from '@angular/core';
import { CoffeeShop } from '../coffeeshop';
import { COFFEESHOPS } from '../mock-coffee-shops';
import { CoffeeShopService } from '../coffee-shop.service';
import { DetailCoffeeShopViewComponent } from '../detail-coffee-shop-view/detail-coffee-shop-view.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-coffeeshops',
  templateUrl: './coffeeshops.component.html',
  styleUrls: ['./coffeeshops.component.css']
})
export class CoffeeshopsComponent {

  coffeeShops: CoffeeShop[] = [];

  //coffeeShops = COFFEESHOPS;

  selectedCoffeeShop?: CoffeeShop;

  // onSelect(coffeeShop: CoffeeShop): void {
  //   this.selectedCoffeeShop = coffeeShop;
  //   console.log(coffeeShop)
  // }

  constructor(private coffeeShopService: CoffeeShopService) {}

  ngOnInit(): void {
    this.getCoffeeShops();
  }

  getCoffeeShops(): void {
    this.coffeeShopService.getCoffeeShops().subscribe(coffeeShops => this.coffeeShops = coffeeShops);
  }

  // onClick(coffeeShop: CoffeeShop): void {
  //   this.selectedCoffeeShop = coffeeShop;

  //   this.coffeeShopService.getCoffeeShops().subscribe(coffeeShops => this.coffeeShops = coffeeShops);
  //   console.log(this.selectedCoffeeShop);
  //   console.log('onclick clicked')
  //   console.log(coffeeShop)
  //   //this.coffeeShopService.setCoffeeShops(coffeeShop); //
  //   // this.router.navigate(['/detail-coffee-shop-view']);

  //   // this.router.navigate(['/detail-coffee-shop-view', coffeeShop.id]);
  // }
  
  // it must have been the constructor which was preventing the HTML to load
  // when calling the CoffeeShop service

  //constructor(private coffeeShopService: CoffeeShopService) { }
  // constructor before properties and methods are declared!

// The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.

// When Angular creates a HeroesComponent, the Dependency Injection system sets the heroService parameter to the singleton instance of HeroService.

  // coffeeShops: CoffeeShop[] = [];

  // selectedCoffeeShop?: CoffeeShop;
  // onSelect(coffeeShop: CoffeeShop): void {
  //   this.selectedCoffeeShop = coffeeShop;

  // }
  // we need this so we can call onSelect on the onClick eventHandler in the html

  // create a method to get the coffee shop info from the service

  // getCoffeeShops(): void {
  //   //this.coffeeShops = this.coffeeShopService.getCoffeeShops();
  // }

  // use a lifecycle method to get the coffee shop instance AFTER constructing the component

  // ngOninit(): void {
  //   this.getCoffeeShops();
  // }







 //coffeeShop = 'Archetype'
// coffeeShop: CoffeeShop = {
//   id: 1,
//   name: 'Archetype',
//   description: 'Small Coffee Shop near Great Titchfield St.',
//   location: 'London'
//}
}
