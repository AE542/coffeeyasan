import { Component, OnInit, HostBinding } from '@angular/core';
import { Cloudinary } from '@cloudinary/url-gen';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // imports: [RouterLink, RouterOutlet]
  // animations: [ trigger, state, style, animate, transition, transition]
})
export class AppComponent {

  ngOnInit(): void {
    const cld = new Cloudinary({cloud: {cloudName: 'dv7ncmqys'}});
  //   document.addEventListener("DOMContentLoaded", function() {
  //     document.querySelector("html")?.classList.add("loaded");
  //   });
  }
 
}
