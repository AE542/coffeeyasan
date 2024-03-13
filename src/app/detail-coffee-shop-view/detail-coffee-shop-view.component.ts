import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CoffeeShop } from '../coffeeshop';
import { ActivatedRoute, Router } from '@angular/router';
// import { CoffeeShopService } from '../coffee-shop.service';
import { Loader } from "@googlemaps/js-api-loader";
import {} from 'googlemaps';
import { GOOGLE_MAPS_API_KEY } from '../../apikey';
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
  coffeeShop: CoffeeShop | undefined;

  coffeeShopsArray$: Observable<CoffeeShop> = new Observable<CoffeeShop>();

  coffeeShopArray: CoffeeShop[] = [];

  lat = 51.521358;
  lng = -0.1061548;

  // -74.5, 40

  @ViewChild('map') mapElement!: ElementRef; 

  apiKey = MAPBOX_API_TOKEN;
  
  // coffeeShopsArray$: Observable<CoffeeShop[]> = new Observable<CoffeeShop[]>();

constructor(private route: ActivatedRoute, private coffeeShopService: CoffeeShopsCrudService) {}

// async initMap() {
//   console.log('Maps JavaScript API loaded.');

//   const mapContainer = document.getElementById('map') as HTMLElement;
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

//   // Create a new map object
 
//   if (mapContainer) {
//     const position = { lat: 51.5042922, lng: -0.1061548 };
//     const map = new google.maps.Map(mapContainer, {
//     center: position,
//     zoom: 12, // Adjust the zoom level as needed
//     mapId: 'Origin'
//     // TODO: Add actual locations from API depending on route clicked
    
//   });
//   const marker = new AdvancedMarkerElement({
//     map: map,
//     position: position,
//     title: "Origin Coffee"
//   });

//   console.log('Map data found')
//   } else {
//     console.error('Map container not found');
//   }

 
// }

ngOnInit(): void {
this.getCoffeeShops();
// this.initialiseMap();

// new Loader({apiKey: GOOGLE_MAPS_API_KEY}).load().then(this.initMap);

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
  
  // REFACTOR TO NOT USE TIMEOUT - PROMISE INSTEAD?
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
    center: [this.lng, this.lat],
    zoom: 12
  });
  const marker = new mapboxgl.Marker()
  .setLngLat([this.lng, this.lat])
  .addTo(map);

  // if (mapDiv?.style.visibility === 'visible') {
  //   map.resize()
  // }
  
}, 200);

 
}


}
