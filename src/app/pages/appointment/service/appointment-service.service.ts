import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Doctor } from '../../registration/interface/Doctor';
import { AppointmentDoctor } from '../interface/AppointmentDoctor';
import { NewAppointment } from '../interface/NewAppointment';
import { RecommendedAppointmentsWithDoctor } from '../interface/RecommendedAppointmentsWithDoctor';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  api=environment.apiUrl
 
  getDoctorBySpec(spec : any):Observable<Doctor[]>{
    return this.http.get<Doctor[]>(`${this.api}/ApplicationDoctor/specialization/${spec}`);
  }
 
  recommendAppointments(recommended: AppointmentDoctor): Observable<RecommendedAppointmentsWithDoctor[]>{
    return this.http.post<RecommendedAppointmentsWithDoctor[]>(`${this.api}/Appointment/recommendInDateRange`,recommended);
  }
  createAppointment(newA : NewAppointment){
    return this.http.post<NewAppointment>(`${this.api}/Appointment/create`, newA);
  }
 
  
}

