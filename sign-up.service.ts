import { Injectable } from '@angular/core';
 
import { SignUp } from './sign-up';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http:HttpClient) { }

  getpassenger():Observable<SignUp[]>{
    // return this.http.get<SignUp[]>('../assets/data/SignUp1.json').pipe(catchError(this.errorHandler)); 
   return this.http.get<SignUp[]>('http://localhost:8787/passenger')
 }
 getpassengerById():Observable<SignUp[]>{
  // return this.http.get<SignUp[]>('../assets/data/SignUp1.json').pipe(catchError(this.errorHandler)); 
 return this.http.get<SignUp[]>('http://localhost:8787/passenger/{id}')
}
 addpassenger(SignUp:SignUp):Observable<SignUp>{
  
       return this.http.post<SignUp>('http://localhost:8787/passenger/add/{id}',SignUp).pipe(catchError(this.errorHandler)); 
   }
   updatepassenger(SignUp:SignUp):Observable<SignUp>{
  
    return this.http.post<SignUp>('http://localhost:8787/passenger/update/{id}',SignUp).pipe(catchError(this.errorHandler)); 
}
deletepassenger(SignUp:SignUp):Observable<SignUp>{
  
  return this.http.post<SignUp>('http://localhost:8787/passenger/delete',SignUp).pipe(catchError(this.errorHandler)); 
}


   errorHandler(error:HttpErrorResponse){
     return throwError(error.message || 'Server Error')
   }
}
