import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoggedUser } from '../interface/logged-user';

@Injectable({
  providedIn: 'root'
})
export class PatientProfileService {
  private apiServerUrl = environment.apiPatientUrl;

  constructor(private http: HttpClient) { }

  public getPatient(patientId: number):Observable<LoggedUser>{
    return this.http.get<LoggedUser>(`${this.apiServerUrl}/${patientId}`);
  }
}
