import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCoffeeShopViewComponent } from './detail-coffee-shop-view/detail-coffee-shop-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { VideoLibraryComponent } from './video-library/video-library.component';
import { CoffeeshopsComponent } from './coffeeshops/coffeeshops.component';

const routes: Routes = [ 
  { path: '', component: CoffeeshopsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent},
  { path: 'video-library', component: VideoLibraryComponent},
  { path: 'detail-coffee-shop-view/:id', component: DetailCoffeeShopViewComponent },
  { path: '**', component: PageNotFoundComponent},
  { path: '', redirectTo: '/app', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
