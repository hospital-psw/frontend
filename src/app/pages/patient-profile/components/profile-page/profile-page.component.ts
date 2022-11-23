import { Component, OnInit } from '@angular/core';
import { LoggedUser } from '../../interface/logged-user';
import { PatientProfileService } from '../../services/patient-profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  public loggedPatient: any = {} as any;

  constructor(private patientService:PatientProfileService) { }

  ngOnInit(): void {
    this.getUser(7);
  }

  public getUser(patientId: number): void{
    this.patientService.getPatient(patientId).subscribe(
      (response: LoggedUser) => {
        this.loggedPatient = response;
        //console.log(this.loggedPatient.firstName);
      }
    )
  }

}
