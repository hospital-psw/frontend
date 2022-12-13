import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Branch from '../../interfaces/branch';
import NewAppointmentDTO from '../../interfaces/newAppointmentDTO';
import RecommendAppointmentDTO from '../../interfaces/recommendAppointmentDTO';
import UserData from '../../interfaces/userData';
import { AppointmentReservationService } from '../../services/appointment-reservation.service';
@Component({
  selector: 'app-appointment-reservation',
  templateUrl: './appointment-reservation.component.html',
  styleUrls: ['./appointment-reservation.component.scss']
})
export class AppointmentReservationComponent implements OnInit {

  @ViewChild('stepper') stepper: MatStepper;

  noneFound: boolean = false;
  selectedDate: Date;
  selectedBranchId: number = -1;
  selectedBranch?: string = '';
  selectedDoctorId: number = -1;
  selectedDoctor: string;
  selectedAppointment: Date;
  recommendAppointmentDTO: RecommendAppointmentDTO;
  newAppointmentDTO: NewAppointmentDTO;
  minDate: Date;
  userData: UserData;
  doctors: any = []
  appointments: any = []

  branches: Branch[] = [
    { id: 0, name: "General" },
    { id: 1, name: "Cardiology" },
    { id: 2, name: "Neurology" }]

  constructor(private service: AppointmentReservationService, private router: Router, private toaster:ToastrService) { }

  ngOnInit(): void {
    this.selectedDate = new Date();
    this.selectedDate.setDate(this.selectedDate.getDate() + 1);
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() + 1);
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }
  selectBranch(id: number) {
    this.selectedBranchId = id;
    this.selectedBranch = this.branches.find((branch) => branch.id === id)?.name;
  }
  selectDoctor(id: number) {
    this.selectedDoctorId = id;
    var doc = this.doctors.find((doctor: any) => doctor.id === id);
    this.selectedDoctor = `${doc.firstName} ${doc.lastName}`
  }
  selectAppointment(date: Date) {
    this.selectedAppointment = date;
    console.log(this.selectedAppointment)
  }
  getDoctors(): void {
    this.service.GetDoctorsBySpecialization(this.selectedBranchId).subscribe((data) => {
      this.doctors = data;
    })
  }
  test() {
    this.noneFound = !this.noneFound
  }
  pickNewDate() {
    this.stepper.selectedIndex = 0;
    this.noneFound = false;
  }
  pickNewDoctor() {
    this.selectedDoctorId = -1;
    this.selectedDoctor = "";
    this.stepper.selectedIndex = 2;
    this.noneFound = false;
  }
  toHomePage() {
    this.router.navigate(['/home']);
    this.noneFound = false;
  }
  getAppointments(): any {
    this.recommendAppointmentDTO = {
      date: this.selectedDate,
      patientId: this.userData.id,
      doctorID: this.selectedDoctorId,
    }
    this.service.GetAppointments(this.recommendAppointmentDTO).subscribe((data) => {
      this.appointments = data;
      if (!this.appointments) this.noneFound = true;
    })
  }
  Schedule(): void {
    this.newAppointmentDTO = {
      date: this.selectedDate,
      patientId: this.userData.id,
      doctorID: this.selectedDoctorId,
      examType: 1
    }
    this.service.CreateReservation(this.newAppointmentDTO).subscribe((response) => {
      this.router.navigate(['/home'])
      this.toaster.success('Your appointment has successfully been scheduled! 😀')
    });
  }
}
