import { Component, OnInit } from '@angular/core';
import { Allergies } from '../../../interface/Allergies';
import { Doctor } from '../../../interface/Doctor';
import { Patient } from '../../../interface/Patient';
import { RegistrationServiceService } from '../../../service/registration-service.service';



@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  public allergies: Allergies[] = [];
  public  doctors: Doctor[] = [];
  constructor(private registrationService: RegistrationServiceService) {}
  
  ngOnInit(): void
{
    this.registrationService.findAllAllergies().subscribe((res)=>{
    this.allergies = res;
    })
    this.registrationService.findAllDoctors().subscribe((result)=>{
      this.doctors = result;
      console.log(this.doctors)
    })
  }
  onSubmit(n: any){
    console.log(n)
  }
}
