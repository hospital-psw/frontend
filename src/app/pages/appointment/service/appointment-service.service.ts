import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Doctor } from '../../registration/interface/Doctor';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  api=environment.apiUrl
 
  getDoctorBySpec(spec : any):Observable<Doctor[]>{
    return this.http.get<Doctor[]>(`${this.api}/ApplicationDoctor/specialization/${spec}`);
  }
 

}




