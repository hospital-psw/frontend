import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Allergies } from '../../../interface/Allergies';
import { applicationUserDTO } from '../../../interface/ApplicationUser';
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
  date (d:any): any 
  {
    return d+"T12:45:55.747Z";
    
  }
  onSubmit(n: any){
    let registerUser: applicationUserDTO = {
      firstName: n.name,
      lastName:n.surname, 
      email : n.email,
      dateOfBirth :n.date,
      male : n.gender,
      password : n.password,
      confirmPassword : n.cpassword
    };

    let patient : Patient ={
      applicationUserDTO : registerUser,
      bloodType: n.bloodtype,
      choosenDoctor : n.doctor,
      allergies : n.allergie
    }
    console.log(registerUser.dateOfBirth)
    this.registrationService.register(patient).subscribe(
      (data) => {
        alert("Success!");
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
}
