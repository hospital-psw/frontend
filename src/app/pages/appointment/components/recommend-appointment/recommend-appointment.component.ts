import { Component, OnInit } from '@angular/core';
import { Allergies } from 'src/app/pages/registration/interface/Allergies';
import { Doctor } from 'src/app/pages/registration/interface/Doctor';
import { RegistrationServiceService } from 'src/app/pages/registration/service/registration-service.service';
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
  public spec  = '0';
  ngOnInit(): void {
    this.registrationService.findAllDoctors().subscribe((result)=>{
      this.doctors = result;
      console.log(this.doctors)
    
    // this.appoitnemntService.getDoctorBySpec(this.spec).subscribe((result)=>{
     // this.doctors = result;
      //console.log(this.doctors)
    })
  }
  onSubmit(n:any) {
    
    //this.registrationService.findAllDoctors().subscribe((result)=>{
      //this.appointments = result;
      console.log(n.doctor)
      this.appoitnemntService.getDoctorBySpec(n.doctor.specialization).subscribe((result)=>{
      
      for (let i = 0; i < result.length; i++) {
          if(result[i].id!=n.doctor.id)
          {
            this.appointments.push(result[i]);
          }
      }
    })
  }
    
}


