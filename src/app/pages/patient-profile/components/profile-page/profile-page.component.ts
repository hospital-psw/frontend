import { Component, OnInit } from '@angular/core';
import { LoggedUser } from '../../interface/logged-user';
import { PatientProfileService } from '../../services/patient-profile.service';
import { AuthService } from 'src/app/shared/Auth/services/auth.service'; 
import { Subscription } from 'rxjs';
import { ProfileInfo } from '../../interface/profile-info';

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
  public date: string;


  constructor(private authService: AuthService,private patientService:PatientProfileService) { }

  ngOnInit(): void {
    //this.getUser(13);
    this.userSub = this.authService.user.subscribe(user =>{
      this.getUser(user.id);
    });
  }

  public getUser(patientId: number): void{
    this.patientService.getPatient(patientId).subscribe(
      (response: ProfileInfo) => {
        this.loggedPatient = response;
        console.log(this.loggedPatient);
        if(response.gender == 0){
          this.userGender = 'Male';
        }
        else this.userGender='Female';
        if(response.applicationPatient.bloodType == 0){
          this.userBloodType = 'A+'
        }
        else if(response.applicationPatient.bloodType == 1){
          this.userBloodType = 'A-'
        }
        else if(response.applicationPatient.bloodType == 2){
          this.userBloodType = 'B+'
        }
        else if(response.applicationPatient.bloodType == 3){
          this.userBloodType = 'B-'
        }
        else if(response.applicationPatient.bloodType == 4){
          this.userBloodType = 'AB+'
        }
        else if(response.applicationPatient.bloodType == 5){
          this.userBloodType = 'AB-'
        }
        else if(response.applicationPatient.bloodType == 6){
          this.userBloodType = 'O+'
        }
        else{
          this.userBloodType = 'O-'
        }
        
      }
    )
  }

}
