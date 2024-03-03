import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoffeeshopsComponent } from './coffeeshops/coffeeshops.component';
import { DetailCoffeeShopViewComponent } from './detail-coffee-shop-view/detail-coffee-shop-view.component';
// import { provideAnimations } from '@angular/platform-browser/animations';
// import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { VideoLibraryModule } from './video-library/video-library-module';
import { SocialMediaComponent } from './social-media/social-media.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Cloudinary } from '@cloudinary/url-gen';
import { CloudinaryModule } from '@cloudinary/ng';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoffeeshopsComponent,
    DetailCoffeeShopViewComponent,
    PageNotFoundComponent,
    BlogComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    YouTubePlayerModule,
    VideoLibraryModule,
    SocialMediaComponent,
    HttpClientModule,
    ReactiveFormsModule,
    CloudinaryModule
  ],
  // bootstrapApplication:(AppComponent, {
  //   providers: [ provideAnimations(),]
  // }),
  providers: [],
  bootstrap: [AppComponent],
  exports:[ DetailCoffeeShopViewComponent, NavbarComponent, YouTubePlayerModule],
})
export class AppModule { }
