import { Time } from '@angular/common';
import { FlightDetails } from './flight-details';

export class Flight {
      flightId:number;
	 flightName:string;
	 fromLocation:string;
	 toLocation:string;
	//@Temporal(TemporalType.TIMESTAMP)
	  departureDate:Date;
	  arrivalDate:Date;
	 departureTime:Time;
	  arrivalTime:Time;
	  duration:string;
     totalSeats:number;
      fly:FlightDetails[];
}