import { Component, OnInit } from '@angular/core';
import { CoffeeShop } from '../coffeeshop';
import { CoffeeShopsCrudService } from '../services/coffee-shops-crud.service';
import { Observable } from 'rxjs';
// import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-coffeeshops',
  templateUrl: './coffeeshops.component.html',
  styleUrls: ['./coffeeshops.component.css'],
  // animations: [
  //   trigger('pressedButton', [
  //     state('pressed', style ({
  //       backgroundColor: 'blue'}
  //     )),
  //     state('notPressed', style({ 
  //       backgroundColor: 'black'
  //     })),

  //     transition('notPressed => pressed', [ animate('2s')]),
  //     transition('pressed => notPressed', [ animate('2s')])

  //   ]
  //   )
  //   ]
})
export class CoffeeshopsComponent implements OnInit {

  // buttonState: string = 'notPressed';
  // wasPressed = true;
  // for transition animations

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
    // this.buttonState = this.buttonState === 'notPressed' ? 'pressed' : 'notPressed';
    // this.wasPressed = !this.wasPressed;
    // to check if button was clicked
    // console.log(`Button was pressed should have changed animation ${this.wasPressed}`);
    console.log('Button works')
      // const id = 10;
      // const id = Number(this.route.snapshot.paramMap.get('id'));

    // this.coffeeShopService.fetchAllCoffeeShops().subscribe(coffeeShops => this.coffeeShops = coffeeShops);

  }

}