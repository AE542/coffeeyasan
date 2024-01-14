import { Component } from '@angular/core';
import { BlogPosts } from './blog-posts';
import { BLOGPOSTSDATA } from './mock-blog-posts';
import { BlogPostsService } from './blog-posts-service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  
  // blogPosts: BlogPosts[] = BlogPostContent;
  blogPosts: BlogPosts[] = [];
  // be careful with names. You have the elements all declared in the array
  // go one at a time with each component you make and then check each value.

  // coffeeShops: CoffeeShop[] = [];

  //coffeeShops = COFFEESHOPS;

  // selectedCoffeeShop?: CoffeeShop;

  // onSelect(coffeeShop: CoffeeShop): void {
  //   this.selectedCoffeeShop = coffeeShop;
  //   console.log(coffeeShop)
  // }

  constructor(private blogPostService: BlogPostsService) {}

  ngOnInit(): void {
    this.getBlogPosts();
  }

  getBlogPosts(): void {
    this.blogPostService.getBlogPosts().subscribe(blogPosts => this.blogPosts = blogPosts);
}

}