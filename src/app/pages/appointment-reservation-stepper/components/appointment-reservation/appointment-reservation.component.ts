import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Branch from '../../interfaces/branch';
import NewAppointmentDTO from '../../interfaces/newAppointmentDTO';
import RecommendAppointmentDTO from '../../interfaces/recommendAppointmentDTO';
import UserData from '../../interfaces/userData';
import { AppointmentReservationService } from '../../services/appointment-reservation.service';
import { EventSourcingService } from '../../services/event-sourcing.service';
import StartDto from '../../dto/startDto'
import NextDto from '../../dto/nextDto'
import ScheduleAppointmentDto from '../../dto/scheduleAppointmentDto'
import SelectAppointmentDto from '../../dto/selectAppointmentDto'
import SelectDateDto from '../../dto/selectDateDto'
import SelectDoctorDto from '../../dto/selectDoctorDto'
import SelectSpecializationDto from '../../dto/selectSpecialziationDto'
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


  startDto: StartDto;
  nextDto: NextDto;
  selectDateDto: SelectDateDto;
  selectSpecializationDto: SelectSpecializationDto;
  selectDoctorDto: SelectDoctorDto;
  selectAppointmentDto: SelectAppointmentDto;
  scheduleAppointmentDto: ScheduleAppointmentDto;

  aggregateId: number;

  branches: Branch[] = [
    { id: 0, name: "General" },
    { id: 1, name: "Cardiology" },
    { id: 2, name: "Neurology" }]

  constructor(private event_service: EventSourcingService, private service: AppointmentReservationService, private router: Router, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.selectedDate = new Date();
    this.selectedDate.setDate(this.selectedDate.getDate() + 1);
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() + 1);
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');


    let temp = new Date()
    temp.setDate(temp.getHours() + 1)

    this.startDto = {
      aggregateId: -1,
      eventType: 0,
      timeStamp: temp.toISOString(),
      patientId: this.userData.id
    }

    this.event_service.startSession(this.startDto).subscribe((data: any) => {
      this.aggregateId = data.id

      temp = new Date()
      temp.setDate(temp.getHours() + 1)

      this.selectDateDto = {
        aggregateId: this.aggregateId,
        patientId: this.userData.id,
        timeStamp: temp.toISOString(),
        eventType: 3,
        date: this.selectedDate.toISOString()
      }
      this.event_service.selectDate(this.selectDateDto).subscribe((data: any) => {
      })
    })
  }
  selectBranch(id: number) {
    this.selectedBranchId = id;
    this.selectedBranch = this.branches.find((branch) => branch.id === id)?.name;

    let temp = new Date()
    temp.setDate(temp.getHours() + 1)

    this.selectSpecializationDto = {
      aggregateId: this.aggregateId,
      patientId: this.userData.id,
      timeStamp: temp.toISOString(),
      eventType: 4,
      specialization: id
    }
    this.event_service.selectSpecialization(this.selectSpecializationDto).subscribe((data:any) => {
    })
  }
  selectDoctor(id: number) {
    this.selectedDoctorId = id;
    var doc = this.doctors.find((doctor: any) => doctor.id === id);
    this.selectedDoctor = `${doc.firstName} ${doc.lastName}`

    let temp = new Date()
    temp.setDate(temp.getHours() + 1)

    this.selectDoctorDto = {
      aggregateId: this.aggregateId,
      patientId: this.userData.id,
      timeStamp: temp.toISOString(),
      eventType: 5,
      doctorId: id
    }
    this.event_service.selectDoctor(this.selectDoctorDto).subscribe((data:any) => {
    })
  }
  selectAppointment(date: Date) {
    this.selectedAppointment = date;

    let temp = new Date()
    temp.setDate(temp.getHours() + 1)

    this.selectAppointmentDto = {
      aggregateId: this.aggregateId,
      patientId: this.userData.id,
      timeStamp: temp.toISOString(),
      eventType: 6,
      dateTime: this.selectedAppointment.toString() + '.000Z'
    }
    this.event_service.selectAppointment(this.selectAppointmentDto).subscribe((data:any) => {
    })
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
    this.appointments = []
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
    var temp = this.selectedDate
    temp.setDate(temp.getDate() + 1);
    this.recommendAppointmentDTO = {
      date: temp,
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
<<<<<<< HEAD
    console.log(this.newAppointmentDTO)
=======

    let temp = new Date()
    temp.setDate(temp.getHours() + 1)

    this.scheduleAppointmentDto = {
      aggregateId: this.aggregateId,
      patientId: this.userData.id,
      timeStamp:temp.toISOString(),
      eventType: 7,
    }
    this.event_service.scheduleAppointment(this.scheduleAppointmentDto).subscribe((data:any) => {
    })
>>>>>>> 22da67645994c514ccf79bd489889d398771b3b9
    this.service.CreateReservation(this.newAppointmentDTO).subscribe((response) => {
      this.router.navigate(['/app/home'])
      this.toaster.success('Your appointment has successfully been scheduled! 😀')
    });
  }
  NextClicked(step: number): void {
    let temp = new Date()
    temp.setDate(temp.getHours() + 1)

    this.nextDto = {
      aggregateId: this.aggregateId,
      patientId: this.userData.id,
      timeStamp: temp.toISOString(),
      eventType: 1,
      step: step
    }
    this.event_service.nextClick(this.nextDto).subscribe((data:any) => {
    })
  }
  BackClicked(step: number): void {

    let temp = new Date()
    temp.setDate(temp.getHours() + 1)

    this.nextDto = {
      aggregateId: this.aggregateId,
      patientId: this.userData.id,
      timeStamp: temp.toISOString(),
      eventType: 2,
      step: step
    }
    this.event_service.backClick(this.nextDto).subscribe((data:any) => {
    })
  }
  DateChanged() {

    let temp = new Date()
    temp.setDate(temp.getHours() + 1)

    this.selectDateDto = {
      aggregateId: this.aggregateId,
      patientId: this.userData.id,
      timeStamp: temp.toISOString(),
      eventType: 3,
      date: this.selectedDate.toISOString()
    }
    this.event_service.selectDate(this.selectDateDto).subscribe((data: any) => {
    })
  }
}
