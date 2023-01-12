import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import NextDto from '../dto/nextDto';
import ScheduleAppointmentDto from '../dto/scheduleAppointmentDto';
import SelectAppointmentDto from '../dto/selectAppointmentDto';
import SelectDateDto from '../dto/selectDateDto';
import SelectDoctorDto from '../dto/selectDoctorDto';
import SelectSpecializationDto from '../dto/selectSpecialziationDto';
import StartDto from '../dto/startDto';

@Injectable({
  providedIn: 'root'
})
export class EventSourcingService {

  constructor(private http:HttpClient) { }

  api = environment.apiEventSourcing

  startSession(dto:StartDto):any {
    return this.http.post(`${this.api}/start`, dto)
  }
  nextClick(dto:NextDto):any {
    return this.http.post(`${this.api}/next`, dto)
  }
  backClick(dto:NextDto):any {
    return this.http.post(`${this.api}/back`, dto)
  }
  selectDate(dto:SelectDateDto):any{
    return this.http.post(`${this.api}/date`, dto)
  }
  selectSpecialization(dto:SelectSpecializationDto):any{
    return this.http.post(`${this.api}/specialization`, dto)
  }
  selectDoctor(dto:SelectDoctorDto):any{
    return this.http.post(`${this.api}/doctor`, dto)
  }
  selectAppointment(dto:SelectAppointmentDto):any{
    return this.http.post(`${this.api}/appointment`, dto)
  }
  scheduleAppointment(dto:ScheduleAppointmentDto):any{
    return this.http.post(`${this.api}/schedule`, dto)
  }
}
