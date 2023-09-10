import { Injectable } from '@angular/core';
import { CoffeeShop } from './coffeeshop';
import { COFFEESHOPS } from './mock-coffee-shops';

// You must make the HeroService available to the dependency injection system before Angular can inject it into the HeroesComponent by registering a provider. A provider is something that can create or deliver a service. In this case, it instantiates the HeroService class to provide the service.

// To make sure that the HeroService can provide this service, register it with the injector. The injector is the object that chooses and injects the provider where the application requires it.


// When you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it. Registering the provider in the @Injectable metadata also allows Angular to optimize an application by removing the service if it isn't used.
@Injectable({
  providedIn: 'root'
})
export class CoffeeShopService {

  constructor() { }

  getCoffeeShops(): CoffeeShop[] {
    return COFFEESHOPS;
  }
  // now returns heroes without touching other components
}
