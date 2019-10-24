import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Schedule } from '../schedule';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  schedules:Schedule[];
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onClick(){
    this.router.navigate(['/booking']);
  }
}
