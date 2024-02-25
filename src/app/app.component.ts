import { Component, OnInit } from '@angular/core';
import { Cloudinary } from '@cloudinary/url-gen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(): void {
    const cld = new Cloudinary({cloud: {cloudName: 'dv7ncmqys'}});
  //   document.addEventListener("DOMContentLoaded", function() {
  //     document.querySelector("html")?.classList.add("loaded");
  //   });
  }
 
}
