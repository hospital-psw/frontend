import { Component, OnInit } from '@angular/core';
import Branch from '../../interfaces/branch';
import Doctor from '../../interfaces/doctor';



@Component({
  selector: 'app-appointment-reservation',
  templateUrl: './appointment-reservation.component.html',
  styleUrls: ['./appointment-reservation.component.scss']
})
export class AppointmentReservationComponent implements OnInit {
  selectedDate:Date;    //TODO: bind date picker
  selectedBranchId:number = -1;
  selectedDoctorId:number = -1;

  branches: Branch[] = [
    { id: 0, name: "General" },
    { id: 1, name: "Cardiology" },
    { id: 2, name: "Neurology" }]
  doctors: Doctor[] = [
    { id: 0, name: 'Nikola', surname: 'Grbovic' },
    { id: 1, name: 'Andrija', surname: 'Stanisic' },
    { id: 2, name: 'Kicblo', surname: 'Tru' }]

    selectBranch(id:number) {
      this.selectedBranchId = id;
    }
    selectDoctor(id:number) {
      this.selectedDoctorId = id;
    }

  constructor() { }

  ngOnInit(): void {
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

}
