import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AnamnesesPDF } from '../interface/AnamnesesPDF';
import { Appointment } from '../interface/Appointment';
import { CancellationRequest } from '../interface/CancellationRequest';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private api = environment.apiAppointmentUrl;
  private apiUrl=environment.apiUrl
  

  constructor(private http: HttpClient) { }

  public getPatientAppointments(id: number): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.api}/patient/${id}`)
  }

 
  public getPdf(treatmentId: number): any {
    return this.http.get(`${this.apiUrl}/MedicalTreatment/pdf/` + treatmentId, {
      observe: 'response',
      responseType: 'blob',
    });
  }
  public generateAnamnesisPdf(dto: AnamnesesPDF): any {
    return this.http.post(`${this.apiUrl}/Anamnesis/pdf`, dto, {
      observe: 'response',
      responseType: 'blob',
    });
  }
 


  public cancelAppointment(info: CancellationRequest) : Observable<void>{
    return this.http.put<void>(`${this.api}/cancel`, info)
  }


}
