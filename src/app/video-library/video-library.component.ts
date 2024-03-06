import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CoffeeShop } from '../coffeeshop';
import { CoffeeShopsCrudService } from '../services/coffee-shops-crud.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-video-library',
  templateUrl: './video-library.component.html',
  styleUrls: ['./video-library.component.css'],
})
export class VideoLibraryComponent implements OnInit {
  @ViewChild('youtubeEmbed') youtubeEmbed!: ElementRef;
  apiLoaded = false;

  coffeeShops: CoffeeShop[] = [];
  observer!: IntersectionObserver;

  constructor(private coffeeShopService: CoffeeShopsCrudService) {}
  // create a variable for the coffeeshops array
  coffeeShopsArray$: Observable<CoffeeShop[]> = new Observable<CoffeeShop[]>();

  ngOnInit(): void {
    // this.coffeeShopsArray$ = this.coffeeShopService.fetchAllCoffeeShops();
    
    this.observer = new IntersectionObserver((videos, observer) => {
      videos.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('fadeIn')
        observer.unobserve(entry.target)
        }
      })
    }, {threshold: 0.5});

    this.coffeeShops.forEach(coffeeShop => {
      const videoElement = document.querySelector(`coffeeShop-${coffeeShop.id}`);
      if(videoElement) {
      this.observer.observe(videoElement);
    }
    })
  
    
    if (!this.apiLoaded) {
      this.coffeeShopsArray$ = this.coffeeShopService.fetchAllCoffeeShops();
      (window as any).onYouTubeIframeAPIReady = function () { };
      //Property 'onYouTubeIframeAPIReady' does not exist on type 'Window & typeof globalThis'.

      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }


}
