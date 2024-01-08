import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoffeeshopsComponent } from './coffeeshops/coffeeshops.component';
import { DetailCoffeeShopViewComponent } from './detail-coffee-shop-view/detail-coffee-shop-view.component';

import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { VideoLibraryModule } from './video-library/video-library-module';
import { SocialMediaComponent } from './social-media/social-media.component';
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoffeeshopsComponent,
    DetailCoffeeShopViewComponent,
    PageNotFoundComponent,
    BlogComponent,
    AboutComponent,
    FooterComponent,
    SocialMediaComponent,
    FontAwesomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    YouTubePlayerModule,
    VideoLibraryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[ DetailCoffeeShopViewComponent, NavbarComponent, YouTubePlayerModule FontAwesomeComponent],
})
export class AppModule { }
