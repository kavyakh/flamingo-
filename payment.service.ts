import { Injectable } from '@angular/core';
 
import { Payment } from './payment';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

 
 addPaymentById(Payment:Payment):Observable<Payment>{
  
       return this.http.post<Payment>('http://localhost:8787/Payment/add/{id}',Payment).pipe(catchError(this.errorHandler)); 
   }
   updatePaymentById(Payment:Payment):Observable<Payment>{
  
    return this.http.post<Payment>('http://localhost:8787/Payment/update/{id}',Payment).pipe(catchError(this.errorHandler)); 
}
deletePayment(Payment:Payment):Observable<Payment>{
  
  return this.http.post<Payment>('http://localhost:8787/Payment/delete',Payment).pipe(catchError(this.errorHandler)); 
}


   errorHandler(error:HttpErrorResponse){
     return throwError(error.message || 'Server Error')
   }
}
