import { Component, OnInit } from '@angular/core';
import { CoffeeShop } from '../coffeeshop';
import { ActivatedRoute, Router } from '@angular/router';
import { COFFEESHOPS } from '../mock-coffee-shops';
import { CoffeeShopService } from '../coffee-shop.service';
@Component({
  selector: 'app-detail-coffee-shop-view',
  templateUrl: './detail-coffee-shop-view.component.html',
  styleUrls: ['./detail-coffee-shop-view.component.css']
})
export class DetailCoffeeShopViewComponent {
  coffeeShop: CoffeeShop | undefined;
// coffeeShops = COFFEESHOPS;

// selectedCoffeeShop?: CoffeeShop;

//   onClick(coffeeShop: CoffeeShop): void {
//     this.selectedCoffeeShop = coffeeShop;
//     console.log(coffeeShop)
//     const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.coffeeShopService.getCoffeeShops(id).subscribe(coffeeShop => this.selectedCoffeeShop = coffeeShop);
  
constructor(private route: ActivatedRoute, private coffeeShopService: CoffeeShopService) {}

ngOnInit(): void {
this.getCoffeeShop();

// this.onClick(this.selectedCoffeeShop!);
// console.log('Coffee shop retrieved:', this.selectedCoffeeShop);
// // this is assigning the selectedCoffeeShop with the route selected with the id.
// this.selectedCoffeeShop = this.coffeeShops[+this.route.snapshot.paramMap.get('id')!];

// this.coffeeShopService.getCoffeeShops();
// console.log(this.selectedCoffeeShop)
}

getCoffeeShop(): void {
const id = Number(this.route.snapshot.paramMap.get('id'));
this.coffeeShopService.getCoffeeShop(id).subscribe(coffeeShop => this.coffeeShop = coffeeShop);
}


}
