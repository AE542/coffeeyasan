import { Component, OnInit, HostBinding } from '@angular/core';
import { Cloudinary } from '@cloudinary/url-gen';
import { RouterLink, RouterOutlet } from '@angular/router';
import { trigger, state, style, animate, transition,  } from '@angular/animations'
// import {fader} from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // imports: [RouterLink, RouterOutlet]
   animations: [ trigger("loadAnimationTrigger", [
      state('shown', style({
        transform: 'opacity(0)'})
      ), state('hidden', style({
        transform: 'opacity(1)', display: 'none', opacity: 0})
      ), transition('hidden => shown', [
        animate('0.5s')
      ])
   ]),
  ]
})
export class AppComponent implements OnInit {
  state = 'hidden';
  // state is set like so.
  ngOnInit(): void{
    // const cld = new Cloudinary({cloud: {cloudName: 'dv7ncmqys'}});
    setTimeout(() => {
      this.state = 'shown';
    }, 200);

  }
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }
}
