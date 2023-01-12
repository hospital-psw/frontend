import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointment } from '../interface/Appointment';
import { CancellationRequest } from '../interface/CancellationRequest';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private api = environment.apiAppointmentUrl;

  constructor(private http: HttpClient) { }

  public getPatientAppointments(id: number): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.api}/patient/${id}`)
  }

  public cancelAppointment(info: CancellationRequest) : Observable<void>{
    return this.http.put<void>(`${this.api}/cancel`, info)
  }

}
