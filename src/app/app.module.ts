import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoffeeshopsComponent } from './coffeeshops/coffeeshops.component';
import { DetailCoffeeShopViewComponent } from './detail-coffee-shop-view/detail-coffee-shop-view.component';

import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { VideoLibraryComponent } from './video-library/video-library.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoffeeshopsComponent,
    DetailCoffeeShopViewComponent,
    PageNotFoundComponent,
    BlogComponent,
    AboutComponent,
    VideoLibraryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[ DetailCoffeeShopViewComponent],
})
export class AppModule { }
