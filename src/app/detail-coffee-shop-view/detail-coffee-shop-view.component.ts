import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CoffeeShop } from '../coffeeshop';
import { ActivatedRoute, Router } from '@angular/router';
import {} from 'googlemaps';
import { MAPBOX_API_TOKEN } from '../../apikey';
import { CoffeeShopsCrudService } from '../services/coffee-shops-crud.service';
import { Observable } from 'rxjs';
import * as mapboxgl  from 'mapbox-gl';


@Component({
  selector: 'app-detail-coffee-shop-view',
  templateUrl: './detail-coffee-shop-view.component.html',
  styleUrls: ['./detail-coffee-shop-view.component.css']
})
export class DetailCoffeeShopViewComponent implements OnInit, AfterViewInit {
  coffeeShop!: CoffeeShop;

  coffeeShopsArray$: Observable<CoffeeShop> = new Observable<CoffeeShop>();

  coffeeShopArray: CoffeeShop[] = [];

  // lat = 51.504278;
  // lng = -0.103659;


  @ViewChild('map') mapElement!: ElementRef; 

  apiKey = MAPBOX_API_TOKEN;
  
  // coffeeShopsArray$: Observable<CoffeeShop[]> = new Observable<CoffeeShop[]>();

constructor(private route: ActivatedRoute, private coffeeShopService: CoffeeShopsCrudService) {}


ngOnInit(): void {
this.getCoffeeShops();
}

ngAfterViewInit() {
  
   this.initialiseMap();
}

getCoffeeShops(): void {
  // console.log(this.coffeeShopService.fetchAllCoffeeShops());
  console.log('Button works')
    // const id = 10;
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    // const id = 11;
    console.log(`ID being parsed is ${(id)}`);
  // this.coffeeShopService.getCoffeeShops(id).subscribe(coffeeShops => this.coffeeShop = coffeeShops);
  // this.coffeeShopService.getCoffeeShops(id).subscribe(coffeeShops => this.coffeeShopsArray$ = coffeeShops);
  // THIS POTENTIALLY WORKS -> this.coffeeShopService.fetchAllCoffeeShops().subscribe(coffeeShopsArray$ => this.coffeeShopArray = coffeeShopsArray$);
  

  // BELOW ALWAYS WORKS FOR ORIGIN ONLY BECAUSE SERVICE WAS CALLING AT [0] IN COFFEE SHOPS ARRAY
   this.coffeeShopService.getCoffeeShops(id - 1).subscribe(coffeeShops => this.coffeeShop = coffeeShops);
   // THIS IS WORKING BUT ID AND ARRAY CONFLICTING AS ID STARTS FROM 1 BUT ARRAY STARTS FROM 0
   // CHANGE DATABASE NUMBERING!
   console.log(` getCoffeeShops() in detail-view-component value is: ${this.coffeeShopService.getCoffeeShops(id)}`);

}

initialiseMap(): void {
  // const container = document.getElementById('map');
 const id = parseInt(this.route.snapshot.paramMap.get('id')!);
  this.coffeeShopService.getCoffeeShops(id - 1).subscribe({
    next: (coffeeShop: CoffeeShop) => {
      // Assign the fetched CoffeeShop object to coffeeShop property
      this.coffeeShop = coffeeShop;

      const lat = this.coffeeShop.lat;
      const lng = this.coffeeShop.lon;

  // REFACTOR TO NOT USE TIMEOUT - PROMISE INSTEAD?
  
  // this.coffeeShopService.getCoffeeShops(id - 1).subscribe(coffeeShops => this.coffeeShop = coffeeShops);
  setTimeout(() =>  {
  const mapDiv = document.getElementById('map');
  if (mapDiv) {
    mapDiv.style.margin = '50 50 40 40';
    // mapDiv.style.
    mapDiv.style.height = '500px';
    mapDiv.style.paddingLeft = '30px';
  }
  const map = new mapboxgl.Map({
    accessToken: this.apiKey,
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lat, lng],
    zoom: 14
  });
  console.log();
  const marker = new mapboxgl.Marker()
  .setLngLat([lat, lng])
  .addTo(map);
  
}, 400);

  
 console.log(this.coffeeShop.lat)
 console.log(this.coffeeShop.lon)
 
}

})

};

}
