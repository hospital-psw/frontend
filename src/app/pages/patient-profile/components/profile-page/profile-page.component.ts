import { Component, OnInit } from '@angular/core';
import { LoggedUser } from '../../interface/logged-user';
import { PatientProfileService } from '../../services/patient-profile.service';
import { AuthService } from 'src/app/shared/Auth/services/auth.service'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  public loggedPatient: any = {} as any;
  private userSub: Subscription;
  public userGender: string;
  public userBloodType: string;


  constructor(private authService: AuthService,private patientService:PatientProfileService) { }

  ngOnInit(): void {
    //this.getUser(13);
    this.userSub = this.authService.user.subscribe(user =>{
      this.getUser(user.id);
    });
  }

  public getUser(patientId: number): void{
    this.patientService.getPatient(patientId).subscribe(
      (response: LoggedUser) => {
        this.loggedPatient = response;
        if(response.gender == 0){
          this.userGender = 'Male';
        }
        else this.userGender='Female';
        if(response.bloodType == 0){
          this.userBloodType = 'A+'
        }
        else if(response.bloodType == 1){
          this.userBloodType = 'A-'
        }
        else if(response.bloodType == 2){
          this.userBloodType = 'B+'
        }
        else if(response.bloodType == 3){
          this.userBloodType = 'B-'
        }
        else if(response.bloodType == 4){
          this.userBloodType = 'AB+'
        }
        else if(response.bloodType == 5){
          this.userBloodType = 'AB-'
        }
        else if(response.bloodType == 6){
          this.userBloodType = 'O+'
        }
        else{
          this.userBloodType = 'O-'
        }
        
      }
    )
  }

}
