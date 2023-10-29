import { Component } from '@angular/core';

@Component({
  selector: 'app-video-library',
  templateUrl: './video-library.component.html',
  styleUrls: ['./video-library.component.css']
})
export class VideoLibraryComponent {
  apiLoaded = false;

  ngOnInit() {
    if (!this.apiLoaded) {

      (window as any).onYouTubeIframeAPIReady = function () { };
      //Property 'onYouTubeIframeAPIReady' does not exist on type 'Window & typeof globalThis'.

      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }


}
