import { Injectable } from '@angular/core';
 
import { Flight } from './flight';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http:HttpClient) { }

  getAllFlight():Observable<Flight[]>{
    // return this.http.get<Flight[]>('../assets/data/Flight1.json').pipe(catchError(this.errorHandler)); 
   return this.http.get<Flight[]>('http://localhost:8787/flight/list')
 }
 addFlight(Flight:Flight):Observable<Flight>{
  
       return this.http.post<Flight>('http://localhost:8787/flight/add',Flight).pipe(catchError(this.errorHandler)); 
   }
   updateFlight(Flight:Flight):Observable<Flight>{
  
    return this.http.post<Flight>('http://localhost:8787/flight/update',Flight).pipe(catchError(this.errorHandler)); 
}
deleteFlight(Flight:Flight):Observable<Flight>{
  
  return this.http.post<Flight>('http://localhost:8787/flight/delete',Flight).pipe(catchError(this.errorHandler)); 
}
getFlightById():Observable<Flight[]>{
  // return this.http.get<Flight[]>('../assets/data/Flight1.json').pipe(catchError(this.errorHandler)); 
 return this.http.get<Flight[]>('http://localhost:8787/flight/{id}')
}
getFlightByDate():Observable<Flight[]>{
  // return this.http.get<Flight[]>('../assets/data/Flight1.json').pipe(catchError(this.errorHandler)); 
 return this.http.get<Flight[]>('http://localhost:8787/flight/bydate')
}
getFlightByLocation():Observable<Flight[]>{
  // return this.http.get<Flight[]>('../assets/data/Flight1.json').pipe(catchError(this.errorHandler)); 
 return this.http.get<Flight[]>('http://localhost:8787/flight/bylocation')
}

   errorHandler(error:HttpErrorResponse){
     return throwError(error.message || 'Server Error')
   }
}
