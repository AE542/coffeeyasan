import { Component, OnInit } from '@angular/core';
import { BlogPosts } from './blog-posts';
import { CoffeeShopsCrudService } from '../services/coffee-shops-crud.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  // blogPosts: BlogPosts[] = BlogPostContent;
  blogPosts: BlogPosts[] = [];
  // be careful with names. You have the elements all declared in the array
  // go one at a time with each component you make and then check each value.

  blogPostsArray$: Observable<BlogPosts[]> = new Observable<BlogPosts[]>();

  constructor(private blogPostsService: CoffeeShopsCrudService) {}

  ngOnInit(): void {
    this.getBlogPosts();
  }

  getBlogPosts(): void {
    // this.blogPostService.getBlogPosts().subscribe(blogPosts => this.blogPosts = blogPosts);
    this.blogPostsArray$ = this.blogPostsService.getAllBlogPosts();
    console.log(this.blogPostsArray$);
    // this.blogPostsService.getAllBlogPosts().subscribe(blogPosts => this.blogPostsArray$ = blogPosts);
}

}