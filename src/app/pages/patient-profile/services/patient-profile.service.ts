import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoggedUser } from '../interface/logged-user';
import { ProfileInfo } from '../interface/profile-info';

@Injectable({
  providedIn: 'root'
})
export class PatientProfileService {
  private apiServerUrl = environment.apiPatientUrl;

  constructor(private http: HttpClient) { }

  public getPatient(patientId: number):Observable<ProfileInfo>{
    return this.http.get<ProfileInfo>(`${this.apiServerUrl}/getprofile/${patientId}`);
  }
}
