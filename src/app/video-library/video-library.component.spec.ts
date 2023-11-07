import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLibraryComponent } from './video-library.component';

describe('VideoLibraryComponent', () => {
  let component: VideoLibraryComponent;
  let fixture: ComponentFixture<VideoLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoLibraryComponent]
    });
    fixture = TestBed.createComponent(VideoLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a div with the class "youtubeEmbed"', () => {
    const element = fixture.nativeElement;
    const youtubeVideoLibraryDiv = element.querySelector('youtubeEmbed');
    expect(youtubeVideoLibraryDiv).toBeTruthy();
  });

  it('should show video library as array of youtube videos', () => {
    const video = fixture.nativeElement;
    const videoElements = video.querySelectorAll('youtubeEmbed');

    expect(videoElements.length).toBeGreaterThan(1);  
  })
});
