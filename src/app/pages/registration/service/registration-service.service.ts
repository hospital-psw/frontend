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



  findAllAllergies() {
    return this.http.get<Allergies[]>(`${environment.apiUrl}/Allergies/all`);
  }
  findAllDoctors() {
    return this.http.get<Doctor[]>(`${environment.apiUrl}/ApplicationDoctor/allrecommended`);
  }
  register(user : Patient) {
    return this.http.post<Patient>(`${environment.apiUrl}/Auth/register/patient`,user);
  }
}
