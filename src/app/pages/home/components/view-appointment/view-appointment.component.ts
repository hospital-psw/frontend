import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../interface/Appointment';

import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.scss']
})
export class ViewAppointmentComponent implements OnInit {
  public appointments : Appointment[];
  public appointment : Appointment;
  constructor(private appointmentService: AppointmentService) { }
 

  ngOnInit(): void {
    this.appointmentService.getPatientAppointments(1).subscribe((res)=>{
      this.appointments = res;
      this.appointment=this.getAppointmentWithId(1);
      })
   
  }
  getAppointmentWithId(id:number){
     for(let i=0; i<this.appointments.length; i++)
     {
        if(id==this.appointments[i].id)
        {this.appointment= this.appointments[i]
          return this.appointment}
     }
    return  this.appointment
  }

  generatePdf(): void {
    this.appointmentService
      .getPdf(1)
      .subscribe((response: any) => {
        let fileName = 'treatment.pdf';
        let blob: Blob = response.body as Blob;
        let url = window.URL.createObjectURL(blob);
        window.open(url);
      });
  }

}
