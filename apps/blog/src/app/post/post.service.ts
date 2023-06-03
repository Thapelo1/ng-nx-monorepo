import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = 'https://jsonplaceholder.typicode.com';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getPost():  Observable<Post>{
    return this.http.get<Post>(this.apiURL + '/posts/')
    .pipe(catchError(this.errorHandler))
  }

  create(post:Post): Observable<Post> {
    return this.http.post<Post>(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)
    .pipe(catchError(this.errorHandler))
   
  }  

  find(id:number): Observable<Post> {
    return this.http.get<Post>(this.apiURL + '/posts/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.http.delete(this.apiURL + '/posts/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
