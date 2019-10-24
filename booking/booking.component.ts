import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookings:Booking[];
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onClick(){
    this.router.navigate(['/payment']);
  }
}
