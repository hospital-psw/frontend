import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Allergies } from '../interface/Allergies';
import { Doctor } from '../interface/Doctor';
import { Patient } from '../interface/Patient';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  constructor(private http: HttpClient) { }

 api =environment.apiUrl

  findAllAllergies() {
    return this.http.get<Allergies[]>(`${this.api}/Allergies/all`);
  }
  findRecomendedDoctors() {
    return this.http.get<Doctor[]>(`${this.api}/ApplicationDoctor/allrecommended`);
  }
  findAllDoctors() {
    return this.http.get<Doctor[]>(`${this.api}/ApplicationDoctor/all`);
  }
  register(user : Patient) {
    console.log("ovde", user);
    return this.http.post<Patient>(`${this.api}/Auth/register/patient`,user);
  }
}
