import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Doctor from '../interfaces/doctor';
import NewAppointmentDTO from '../interfaces/newAppointmentDTO';
import RecommendAppointmentDTO from '../interfaces/recommendAppointmentDTO';

@Injectable({
  providedIn: 'root'
})
export class AppointmentReservationService {

  constructor(private http:HttpClient) { }
  api = environment.apiApplicationDoctor;
  appointmentApi = environment.apiAppointment;

  GetDoctorsBySpecialization(specializationId:number) {
    return this.http.get(`${this.api}/specializationDTO/`+specializationId);
  };
  CreateReservation(dto:NewAppointmentDTO){
    return this.http.post(`${this.appointmentApi}/create`, dto)
  }
  GetAppointments(dto:RecommendAppointmentDTO) {
    return this.http.post(`${this.appointmentApi}/recommend`, dto)
  }
}
