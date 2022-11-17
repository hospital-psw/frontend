import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Allergies } from '../interface/Allergies';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  constructor(private http: HttpClient) { }

  api = environment.apiFeedbackUrl

  findAll(){
    return this.http.get<Allergies[]>('http://localhost:16177/api/Allergies/All');
  }
}
