import { Injectable } from '@angular/core';
import { Iemployeeleave } from '../models/iemployeeleave';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeleaveserviceService {

  
  private employeeUrl = "http://localhost:5000/api/empleavemapping";
  constructor(private http:HttpClient) { }

  getemployeeleavemaps():Observable<Iemployeeleave[]> {
    return this.http.get<Iemployeeleave[]>(this.employeeUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
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
