import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Allergies } from 'src/app/pages/registration/interface/Allergies';
import { Doctor } from 'src/app/pages/registration/interface/Doctor';
import { RegistrationServiceService } from 'src/app/pages/registration/service/registration-service.service';
import { AuthService } from 'src/app/shared/Auth/services/auth.service';
import { AppointmentDoctor } from '../../interface/AppointmentDoctor';
import { NewAppointment } from '../../interface/NewAppointment';
import { RecommendedAppointmentsWithDoctor } from '../../interface/RecommendedAppointmentsWithDoctor';
import { AppointmentService } from '../../service/appointment-service.service';

@Component({
  selector: 'app-recommend-appointment',
  templateUrl: './recommend-appointment.component.html',
  styleUrls: ['./recommend-appointment.component.scss']
})
export class RecommendAppointmentComponent implements OnInit {

  constructor(private registrationService: RegistrationServiceService, private appoitnemntService : AppointmentService, private authService: AuthService) { }
  public doctors: Doctor[] = [];
  public doctorsWithSameSpec : number[]=[];
  public appointments0 : RecommendedAppointmentsWithDoctor[]=[];
  private userSub: Subscription;
  private patientsId : number;
  
  
  
  ngOnInit(): void {
    this.registrationService.findAllDoctors().subscribe((result)=>{
      this.doctors = result;
    });
    this.userSub = this.authService.user.subscribe(user =>{
      this.patientsId=user.id;
    });

  }
  onSubmit(n:any) {
    //idealan slucaj
    /*
    let appointmentDoctor: AppointmentDoctor = {
      doctorId :[n.doctor.id],
      patientId :-1,
      fromDate : n.st,
      toDate :  n.et
    };
    this.appoitnemntService.recommendAppointments(appointmentDoctor).subscribe((result)=>{
      this.appointments0=result;
      console.log("result ako je idealan slucaj",result)
    })

    if(this.appointments0.length==0) {*/
        if(n.priority==1){
          this.appoitnemntService.getDoctorBySpec(n.doctor.specialization).subscribe((result)=>{
            for (let i = 0; i < result.length; i++) {
              if(result[i].id!=n.doctor.id)
              {
                this.doctorsWithSameSpec.push(result[i].id);
              }
            }
          })
          
          let appointmentDoctor: AppointmentDoctor = {
            doctorId :this.doctorsWithSameSpec,//ovde ce biti selektovani doktor iste spec 
            patientId :this.patientsId,
            fromDate : n.st,
            toDate : n.et
          };
          console.log(appointmentDoctor)
          this.appoitnemntService.recommendAppointments(appointmentDoctor).subscribe((result)=>{
            this.appointments0=result;
            console.log(result)
          })
        }

        if(n.priority==0)
          {
            let stdate: Date = new Date();
            stdate.setDate(n.st.getDate() - 5);
            let etdate: Date = new Date();
            etdate.setDate(n.et.getDate() + 5);
            
            let appointmentDoctor: AppointmentDoctor = {
              doctorId :[n.doctor.id],
              patientId : this.patientsId,
              fromDate :stdate,
              toDate : etdate
            };
            this.appoitnemntService.recommendAppointments(appointmentDoctor).subscribe((result)=>{
              this.appointments0=result;
              console.log("result ako je prioritet doktor",result)
            })
            
          }
     // }
  }
    schedule(d:any , id:any){
    let newAppointment: NewAppointment={
        date: d,
        patientId: this.patientsId,
        doctorId: id,
        examType: 0
      }
      console.log("ovo je novi appoitnment",newAppointment);
      console.log("patients id",this.patientsId);
      this.appoitnemntService.createAppointment(newAppointment).subscribe(
        (data) => {
          alert("Success!");
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }
    
}


