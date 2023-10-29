import { NgModule } from "@angular/core";
import { YouTubePlayerModule } from "@angular/youtube-player";
import { VideoLibraryComponent } from "./video-library.component";
@NgModule({
    declarations: [VideoLibraryComponent],
    imports: [YouTubePlayerModule],
    exports: [VideoLibraryComponent],
})

export class VideoLibraryModule { }