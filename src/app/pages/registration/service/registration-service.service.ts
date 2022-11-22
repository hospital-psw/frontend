import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Allergies } from '../interface/Allergies';
import { Doctor } from '../interface/Doctor';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  constructor(private http: HttpClient) { }

 

  findAllAllergies() {
    return this.http.get<Allergies[]>('http://localhost:16177/api/Allergies/All');
  }
  findAllDoctors() {
    return this.http.get<Doctor[]>('http://localhost:16177/api/Doctor/all');
  }
}
