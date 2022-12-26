import { Component, Input, OnInit } from '@angular/core';
import Appointment from '../../interfaces/appointment';

@Component({
  selector: 'app-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.scss']
})
export class AppointmentCardComponent implements OnInit {
  @Input() appointment:any;
  @Input() selected:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
