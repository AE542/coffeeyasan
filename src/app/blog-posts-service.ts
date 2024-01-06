import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BlogPosts } from './blog/blog-posts';
import { BlogPostContent } from './blog/blog-posts-content';
import { BLOGPOSTS } from './blog-posts-data';

// You must make the Coffee shop Service available to the dependency injection system before Angular can inject it into the CoffeeShopsComponent by registering a provider. A provider is something that can create or deliver a service. In this case, it instantiates the CoffeeService class to provide the service.

// To make sure that Coffee shop Service can provide this service, register it with the injector. The injector is the object that chooses and injects the provider where the application requires it.

// When you provide the service at the root level, Angular creates a single, shared instance of Coffee shopService and injects into any class that asks for it. Registering the provider in the @Injectable metadata also allows Angular to optimize an application by removing the service if it isn't used.
@Injectable({
  providedIn: 'root'
  // needs changing here to get correct blog post dependency
})
export class BlogPostsService {

  constructor() { }

  getBlogPosts(): Observable<BlogPosts[]> {
    const blogPosts = of(BLOGPOSTS);
    return blogPosts;
   }
 
   getBlogPost(id: number): Observable<BlogPosts> {
    const blogPost= BLOGPOSTS.find(h => h.id === id)!;
     return of(blogPost);
   }

  // now returns Blog Posts without touching other components
}