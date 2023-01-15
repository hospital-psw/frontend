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
  number:number;

  constructor() { }

  ngOnInit(): void {
    this.number = Math.floor(Math.random()*(10-1+1)+1);
  }

}
