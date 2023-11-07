import { NgModule } from "@angular/core";
import { YouTubePlayerModule } from "@angular/youtube-player";
import { VideoLibraryComponent } from "./video-library.component";
import { BrowserModule } from "@angular/platform-browser";
import { NavbarComponent } from "../navbar/navbar.component";
@NgModule({
    declarations: [VideoLibraryComponent],
    imports: [YouTubePlayerModule, BrowserModule],
    exports: [VideoLibraryComponent],
})

export class VideoLibraryModule { }