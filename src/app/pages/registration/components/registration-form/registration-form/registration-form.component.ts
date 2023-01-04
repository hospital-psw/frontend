import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  public hide: boolean = true;
  public hideConf: boolean = true;

  constructor(private registrationService: RegistrationServiceService, 
              private toastr: ToastrService,
              private router: Router) {}
  
  ngOnInit(): void
{
    this.registrationService.findAllAllergies().subscribe((res)=>{
      this.allergies = res;
    })
    this.registrationService.findAllDoctors().subscribe((result)=>{
      this.doctors = result;
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
      dateOfBirth :this.date(n.date),
      male : n.gender,
      password : n.password,
      confirmPassword : n.cpassword
    };

    let patient : Patient ={
      applicationUserDTO : registerUser,
      bloodType: n.bloodtype,
      choosenDoctor : n.doctor,
      allergies : [1,2]
    }
    this.registrationService.register(patient).subscribe(
      (data) => {
        this.toastr.success("Success")
        this.router.navigate(["/confirm-email"])
      },
      (error: HttpErrorResponse) => {
        this.toastr.error(error.message)
      }
    );
  }

  onHome(){
    this.router.navigate(['/'])
  }
  
}
