import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomePageServiceService {

  constructor(private http:HttpClient) { }

  getData() {
    return this.http.get('http://localhost:5000/api/Feedback/get/welcome/page')
  }
}
