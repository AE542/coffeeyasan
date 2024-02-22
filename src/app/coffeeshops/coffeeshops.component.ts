import { Component, OnInit } from '@angular/core';
import { CoffeeShop } from '../coffeeshop';
import { COFFEESHOPS } from '../mock-coffee-shops';
// import { CoffeeShopService } from '../coffee-shop.service';
import { DetailCoffeeShopViewComponent } from '../detail-coffee-shop-view/detail-coffee-shop-view.component';
import { Router } from '@angular/router';
import { CoffeeShopsCrudService } from '../services/coffee-shops-crud.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-coffeeshops',
  templateUrl: './coffeeshops.component.html',
  styleUrls: ['./coffeeshops.component.css']
})
export class CoffeeshopsComponent implements OnInit {

  coffeeShops: CoffeeShop[] = [];

  constructor(private coffeeShopService: CoffeeShopsCrudService) {}

  // create a variable for the coffeeshops array
  coffeeShopsArray$: Observable<CoffeeShop[]> = new Observable<CoffeeShop[]>();

  // remove optional above if issues.

  ngOnInit(): void {
    //  this.getCoffeeShops();
    this.coffeeShopsArray$ = this.coffeeShopService.fetchAllCoffeeShops();

    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       entry.target.classList.add('visible');
    //     } else {
    //       entry.target.classList.remove('visible');
    //     }
    //   });
    // });

    // const hiddenElements = document.querySelectorAll('.coffee-shop-item');

    // hiddenElements.forEach((element) => observer.observe(element));
  }

  getCoffeeShops(): void {
    // console.log(this.coffeeShopService.fetchAllCoffeeShops());
    console.log('Button works')
      // const id = 10;
      // const id = Number(this.route.snapshot.paramMap.get('id'));

    // this.coffeeShopService.getCoffeeShops().subscribe(coffeeShops => this.coffeeShops = coffeeShops);

    this.coffeeShopService.fetchAllCoffeeShops().subscribe(coffeeShops => this.coffeeShops = coffeeShops);

    // this.coffeeShopService.fetchAllCoffeeShops().subscribe(coffeeShops => this.coffeeShops = coffeeShops);
    // this.coffeeShopService.getCoffeeShopsNo404(id).subscribe(coffeeShops => this.coffeeShops = coffeeShops);0
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
