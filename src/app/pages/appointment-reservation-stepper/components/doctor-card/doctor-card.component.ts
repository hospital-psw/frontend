import { Component, Input, OnInit } from '@angular/core';
import Doctor from '../../interfaces/doctor';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.scss']
})
export class DoctorCardComponent implements OnInit {

  @Input() doctor:Doctor;
  @Input() selected:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
