import { Component } from '@angular/core';
import { BlogPosts } from './blog-posts';
import { BLOGPOSTS } from './blog-posts-data';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  
  blogPosts: BlogPosts[] = BLOGPOSTS;
  // be careful with names. You have the elements all declared in the array
  // go one at a time with each component you make and then check each value.
}
