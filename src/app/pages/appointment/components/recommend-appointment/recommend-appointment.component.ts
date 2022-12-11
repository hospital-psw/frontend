import { Component, OnInit } from '@angular/core';
import { Allergies } from 'src/app/pages/registration/interface/Allergies';
import { Doctor } from 'src/app/pages/registration/interface/Doctor';
import { RegistrationServiceService } from 'src/app/pages/registration/service/registration-service.service';
import { AppointmentDoctor } from '../../interface/AppointmentDoctor';
import { AppointmentService } from '../../service/appointment-service.service';

@Component({
  selector: 'app-recommend-appointment',
  templateUrl: './recommend-appointment.component.html',
  styleUrls: ['./recommend-appointment.component.scss']
})
export class RecommendAppointmentComponent implements OnInit {

  constructor(private registrationService: RegistrationServiceService, private appoitnemntService : AppointmentService) { }
  public doctors: Doctor[] = [];
  public appointments : Doctor[]=[];
  public appointments2 : string[]=[];
  
  
  ngOnInit(): void {
    this.registrationService.findAllDoctors().subscribe((result)=>{
      this.doctors = result;
   
    })
  }
  onSubmit(n:any) {
    //ovde ide provera da li se mozda desio idealan slucaj bez prioriteta
    if(n.priority==1){
      this.appoitnemntService.getDoctorBySpec(n.doctor.specialization).subscribe((result)=>{
        for (let i = 0; i < result.length; i++) {
          if(result[i].id!=n.doctor.id)
          {
            this.appointments.push(result[i]);
          }
        }
      })

      let appointmentDoctor: AppointmentDoctor = {
        doctorId :n.doctor.id,//ovde ce biti selektovani doktor iste spec 
        fromDate : n.st,
        toDate : n.et
      };
      console.log(appointmentDoctor)
    }
    if(n.priority==0)
    {
      let stdate: Date = new Date();
      stdate.setDate(n.st.getDate() - 5);
      let etdate: Date = new Date();
      etdate.setDate(n.et.getDate() + 5);
      let appointmentDoctor: AppointmentDoctor = {
        doctorId :n.doctor.id,
        fromDate :stdate,
        toDate : etdate
      };
      console.log(appointmentDoctor)
   
    }
  }
    
}


