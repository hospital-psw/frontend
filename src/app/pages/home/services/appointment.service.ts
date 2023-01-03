import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointment } from '../interface/Appointment';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private api = environment.apiAppointmentUrl;
  private apiUrl=environment.apiUrl
  

  constructor(private http: HttpClient) { }

  public getPatientAppointments(id: number): Observable<Appointment[]>{
    console.log(id)
    return this.http.get<Appointment[]>(`${this.api}/patient/${id}`)
  }
 
  public getPdf(treatmentId: number): any {
    return this.http.get(`${this.apiUrl}/MedicalTreatment/pdf/` + treatmentId, {
      observe: 'response',
      responseType: 'blob',
    });
  }
 
}
