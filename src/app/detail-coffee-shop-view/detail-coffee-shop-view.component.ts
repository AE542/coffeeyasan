import { Component, OnInit } from '@angular/core';
import { CoffeeShop } from '../coffeeshop';
import { ActivatedRoute, Router } from '@angular/router';
import { CoffeeShopService } from '../coffee-shop.service';
import { Loader } from "@googlemaps/js-api-loader";
import {} from 'googlemaps';
import { GOOGLE_MAPS_API_KEY } from '../../apikey';


@Component({
  selector: 'app-detail-coffee-shop-view',
  templateUrl: './detail-coffee-shop-view.component.html',
  styleUrls: ['./detail-coffee-shop-view.component.css']
})
export class DetailCoffeeShopViewComponent {
  coffeeShop: CoffeeShop | undefined;

  
constructor(private route: ActivatedRoute, private coffeeShopService: CoffeeShopService) {}

initMap() {
  console.log('Maps JavaScript API loaded.');
  // const center = { lat: 40.7128, lng: -74.0060 };

  const mapContainer = document.getElementById('map') as HTMLElement;

  // Create a new map object

  if (mapContainer) {
    const center = { lat: 40.7128, lng: -74.0060 };
    new google.maps.Map(mapContainer, {
    center: center,
    zoom: 12 // Adjust the zoom level as needed
  })
  console.log('Map data found')
  } else {
    console.error('Map container not found');
  }
}


ngOnInit(): void {
this.getCoffeeShop();

new Loader({apiKey: GOOGLE_MAPS_API_KEY}).load().then(this.initMap);
// creates a new object for the loader each time.. might need to change this in the future.
// needs refactor to remove load()

}

getCoffeeShop(): void {
const id = Number(this.route.snapshot.paramMap.get('id'));
this.coffeeShopService.getCoffeeShop(id).subscribe(coffeeShop => this.coffeeShop = coffeeShop);
}


}
