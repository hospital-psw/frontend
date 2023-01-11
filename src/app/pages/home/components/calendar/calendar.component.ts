import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { EventColor } from 'calendar-utils';
import { ToastrService } from 'ngx-toastr';
import { Appointment } from '../../interface/Appointment';
import { AppointmentService } from '../../services/appointment.service';
import { addDays, subDays } from 'date-fns';
import { map, Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/Auth/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ExaminationType } from '../../interface/ExaminationType';
import { ModalDialogService } from 'src/app/shared/modal-dialog/modal-dialog.service';
import { ModalDialogData } from 'src/app/shared/modal-dialog/interface/ModalDialogData';
import { CancellationInfo } from '../../interface/CancellationInfo';
import { CancellationRequest } from '../../interface/CancellationRequest';
import { LegendDialogData } from 'src/app/shared/modal-dialog/interface/LegendDialogData';

const colors: Record<string, EventColor> = {
  default: {
    primary: '#0E4C92',
    secondary: '#cbcbd226',
  },
  canceled: {
    primary: '#ffcccb',
    secondary: '#ffcccb',
  },
  done: {
    primary: '#bcf5bc',
    secondary: '#bcf5bc',
  },
  scheduled: {
    primary: '#ffffa1',
    secondary: '#ffffa1'
  },
  selected:{
    primary: '#64a5ff',
    secondary: '#64a5ff'
  }
};

const dialogData: ModalDialogData = {
  title: "Cancel appointment",
  description: "Would you like to cancel this appointment?"
}

const legendData: LegendDialogData = {
  title: "Each color represents state of displayed appointment:",
} 

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  private userSub: Subscription;
  private patientId: number;
  private dialogAnswer: boolean;
  isCanceling: boolean = false;

  view: CalendarView = CalendarView.Week;
  viewDate: Date;
  viewDateEnd: Date;
  dayStartHour = 6;
  dayEndHour = 24;
  hourSegmentHeight = 80;
  daysInWeek = 7;

  appointments: CalendarEvent<{ appointment: Appointment }>[];
  examinationTypes: ExaminationType[];

  canClick: boolean = false;
  selectedEvent: CalendarEvent<{ appointment: Appointment }> = {
    title: null as any,
    start: null as any,
    color: { ...colors['default'] },
    end: null as any,
    meta: null as any,
  };

  constructor(private appointmentService: AppointmentService,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
    private dialogService: ModalDialogService) { }



  ngOnInit(): void {
    this.canClick = false;
    this.viewDate = new Date();
    this.viewDateEnd = addDays(this.viewDate, 6);
    this.examinationTypes = Object.values(ExaminationType);
    this.userSub = this.authService.user.subscribe(user => {
      this.patientId = user.id
    });
    this.getAllAppointments();

  }

  getAllAppointments(): void {
    this.appointmentService
      .getPatientAppointments(this.patientId)
      .pipe(
        map((results: Appointment[]) => {
          return results.map((appointment: Appointment) => {
            return {
              title: this.createTitle(appointment),
              start: new Date(appointment.date),
              color: {...colors[this.handleColor(appointment.isDone, appointment.deleted)]},
              end: new Date(appointment.endDate),
              isDone: appointment.isDone,
              deleted: appointment.deleted,
              meta: {
                appointment,
              },
            };
          });
        })
      )
      .subscribe(
        (response: CalendarEvent<{ appointment: Appointment }>[]) => {
          this.appointments = response;
        },
        (error: HttpErrorResponse) => {
        }
      );
  }


  private handleColor(isDone: boolean, deleted: boolean){
    if(!deleted && !isDone)
      return "scheduled";
    if(isDone)
      return "done"
    if(deleted)
      return "canceled"

    return "default"
  }

  createTitle(appointment: Appointment): string {
    return (
      this.examinationTypes[appointment.examType] +
      '\n' +
      "Dr " + appointment.doctor.firstName +
      ' ' +
      appointment.doctor.lastName +
      '\n' +
      appointment.room.floor.building.name +
      ', Floor: ' +
      appointment.room.floor.number +
      ', Room: ' +
      appointment.room.number
    );
  }

  handleCurrent(): void {
    this.viewDate = new Date();
    this.viewDateEnd = addDays(this.viewDate, 6);
  }

  handlePrevious(): void {
    this.viewDate = subDays(this.viewDate, 7);
    this.viewDateEnd = addDays(this.viewDate, 6);
  }

  handleNext(): void {
    this.viewDate = addDays(this.viewDate, 7);
    this.viewDateEnd = addDays(this.viewDate, 6);
  }

  onEventClick(event: any): void {
    this.canClick = this.handleCanCancel(event.event.deleted,event.event.isDone)
    this.selectedEvent.color = colors['selected'];
    this.selectedEvent = event.event;
    this.selectedEvent.color = colors['selected'];
  }

  private handleCanCancel(deleted: boolean, isDone: boolean){
    if(!deleted && !isDone)
      return true;

    return false;
  }

  openDialog(event: any): void {
    this.dialogService.openYesNoDialog(dialogData)
      .afterClosed().subscribe(response => {
        if (response) {
          this.handleCancel(this.selectedEvent.meta?.appointment.id as number)
        }
      })
  }


  openLegend(event: any) : void{
    this.dialogService.openLegendDialog(legendData)
  }

  handleCancel(id: number) {
    this.isCanceling = true;
    this.appointmentService.cancelAppointment(this.createCancellationRequest(id))
      .subscribe((response) => {
        this.isCanceling = false;
        this.toastr.success('Your appointment has been successfully canceled!')
        window.location.reload();
      })
  }

  private createCancellationRequest(id: number) {
    var request: CancellationRequest  = {
      cancellationInfo: this.createCancellationInfo(),
      appointmentId: id
    }

    return request;
  }

  private createCancellationInfo() {
    var info : CancellationInfo={
      date: new Date(),
      canceledBy: 13
    }
    return info;
  }

}
