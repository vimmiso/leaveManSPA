import { Ileave } from './../models/ileave';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IEmployee } from '../models/iemployee';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaveserviceService {

  
  private leaveUrl = "http://localhost:5000/api/leave";
  constructor(private http:HttpClient) { }

  getleaves():Observable<Ileave[]> {
    return this.http.get<Ileave[]>(this.leaveUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getlea(id: number): Observable<Ileave> {
    const url = `${this.leaveUrl}/${id}`;
    return this.http.get<Ileave>(url).pipe(
      tap(data => console.log('Authorised: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addLeave(emp: Ileave): Observable<Ileave> {
    return this.http.post<Ileave>(this.leaveUrl, emp, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      tap(data => console.log('We got it: ', + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  updateLeave(emp: Ileave): Observable<Ileave> {
    const url = `${this.leaveUrl}/${emp.Id}`;
    return this.http.put<Ileave>(url, emp, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      tap(() => console.log('We got it: ', + emp.Id)),
      map(()=> emp),
      catchError(this.handleError)
    );
  }
  deleteLeave(id:number):Observable<void>{
        const url = `${this.leaveUrl}/${id}`;

    return this.http.delete<void>(url).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(err: HttpErrorResponse) {
    let errorMessage='';
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error occured: ${err.error.message}`;
    }else{
      errorMessage = `Server return code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
