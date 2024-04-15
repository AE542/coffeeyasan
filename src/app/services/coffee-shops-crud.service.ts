import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CoffeeShop } from '../coffeeshop';
import { BlogPosts } from '../blog-posts';

@Injectable({
  providedIn: 'root'
})
export class CoffeeShopsCrudService {

  private url = "coffeeshops";

  private blogUrl = "http://localhost:3000/blogposts/";
  

  constructor(private http: HttpClient) {
    // having access to private http param here allows us to call http methods
   }
     // fetch all results with no filters
   fetchAllCoffeeShops(): Observable<CoffeeShop[]> {
    return this.http
      .get<CoffeeShop[]>(this.url, { responseType: 'json' })
      .pipe(tap((_) => console.log('Fetched CoffeeShops'))
    )
   }


   getAllBlogPosts(): Observable<BlogPosts[]> {
    return this.http.get<BlogPosts[]>(this.blogUrl, { responseType: 'json' })
    .pipe(tap((_) => console.log('Fetched Blog Posts'))
    )
   }
  //  getCoffeeShops(): Observable<CoffeeShop[]> {
  //   const coffeeShops = this.fetchAllCoffeeShops();
  //   return coffeeShops;
  //  }

  // getCoffeeShops(id: number): Observable<CoffeeShop[]> {
  //   const url = `${this.url}/${id}`;
  //   console.log(url)
  //   return this.http.get<CoffeeShop[]>(url).pipe(
  //     tap(_ => console.log('CoffeeShop fetched again')),
  //     catchError(this.handleError<CoffeeShop[]>('getCoffeeShops', []))
  //   );
  // }

  getCoffeeShops(id: number): Observable<CoffeeShop> {
    const url = `${this.url}/?id=${id}`;
    return this.http.get<CoffeeShop[]>(url)
      .pipe(
        map(coffeeShops => coffeeShops[id]), // returns a {0|1} element array 0 returning Origin
        //id is returning 15 from database
        tap(h => {
          const outcome = h ? 'fetched id' : 'did not find id';
          console.log(`${outcome} coffeeShop id=${id}`);
          console.log(`url is: ${url}`)
        }),
        catchError(this.handleError<CoffeeShop>(`getCoffeeShop id=${id}`))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
}

}