import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Allergies } from '../../../interface/Allergies';
import { Patient } from '../../../interface/patient';
import { RegistrationServiceService } from '../../../service/registration-service.service';



@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  allergies: Allergies[] = [];
  bloodType: any[] = [];
  doctors: any[]=[];
  gender: any[]=[];
  constructor(private registrationService: RegistrationServiceService) {}
  
  ngOnInit(): void
  { 
    this.registrationService.findAll().subscribe((res)=>{
    this.allergies = res;
    console.log(res)
       })
    
    this.bloodType = [
      {value: 'A'},
      {value:  'B'},
      {value: 'AB'},
      {value: '0'},
    ];
    this.gender = [
      {value: ' Male'},
      {value:  'Female'},
      {value: 'Other'},
      
    ];
    this.doctors = [
      {value: 'Petar Petrovic'},
      {value:  'Marko Markovic'}
     
    ];
    
  }
  onSubmit(feedback: Patient){}
}
