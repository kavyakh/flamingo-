import { Injectable } from '@angular/core';
 

import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }

  getAllticket():Observable<Ticket[]>{
    // return this.http.get<Ticket[]>('../assets/data/ticket1.json').pipe(catchError(this.errorHandler)); 
   return this.http.get<Ticket[]>('http://localhost:8787/ticket')
 }
 addticket(Ticket:Ticket):Observable<Ticket>{
  
       return this.http.post<Ticket>('http://localhost:8787/ticket/add/{fid}/{pid}',Ticket).pipe(catchError(this.errorHandler)); 
   }
   updateticket(Ticket:Ticket):Observable<Ticket>{

    return this.http.post<Ticket>('http://localhost:8787/ticket/update/{fid}/{pid}',Ticket).pipe(catchError(this.errorHandler)); 
}
deleteticket(Ticket:Ticket):Observable<Ticket>{
  
  return this.http.post<Ticket>('http://localhost:8787/ticket/delete',Ticket).pipe(catchError(this.errorHandler)); 
}
getticketById():Observable<Ticket[]>{
  // return this.http.get<Ticket[]>('../assets/data/ticket1.json').pipe(catchError(this.errorHandler)); 
 return this.http.get<Ticket[]>('http://localhost:8787/ticket/{id}')
}


   errorHandler(error:HttpErrorResponse){
     return throwError(error.message || 'Server Error')
   }
}
