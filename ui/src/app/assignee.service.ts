import { Injectable, Inject } from '@angular/core';
import { Assignee } from './product';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  
 } )
export class AssigneeService {
    private jsonUrl = 'http://localhost:3000/shubham/1';
    constructor(private http: HttpClient){}
    getData(): Observable<Assignee> {
        return this.http.get<Assignee>(this.jsonUrl).pipe(
          catchError(this.errorHandler)
        ); }
        errorHandler(error: HttpErrorResponse) {
            return throwError(error.message || 'Server Error');
          }
}