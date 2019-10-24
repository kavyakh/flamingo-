import { Flight } from './flight';
import { FlightDetails } from './flight-details';

export class Schedule {
    flightId:Flight;
    flightName:Flight;
    from:Flight;
    to:Flight;
    depart:Flight;
    arrive:Flight;
    seats:FlightDetails;
    Price:FlightDetails;
}
