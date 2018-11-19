import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from "src/app/models/user";
import { News } from "src/app/models/news";
import {  catchError, map, tap } from 'rxjs/operators';
 
@Injectable()
export class NewsService {
   constructor(private http: HttpClient) {
   }

   getNews(): Observable<User[]> {
      return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")
         .pipe(
          catchError(this.handleError('getHeroes', []))
         	//map((res: Response) => res.json()))
         	//catch((error: any) => Observable.throw(error.json().error || 'Server error'));
         );
   }

   getLodzNews(): Observable<News[]> {
      return this.http.get<News[]>("http://localhost:8080/news/rss")
         .pipe(
          catchError(this.handleError('getHeroes', []))
         	//map((res: Response) => res.json()))
         	//catch((error: any) => Observable.throw(error.json().error || 'Server error'));
         )
   }


    private handleError<T> (operation = 'operation', result?: T) {
    	 return (error: any): Observable<T> => {
 
	      // TODO: send the error to remote logging infrastructure
	      console.error(error); // log to console instead
	 
	      // TODO: better job of transforming error for user consumption
	      //this.log(`${operation} failed: ${error.message}`);
	 
	      // Let the app keep running by returning an empty result.
	      return of(result as T);
	    };
    }
}