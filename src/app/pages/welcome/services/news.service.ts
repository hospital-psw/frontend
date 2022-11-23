import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  api = environment.apiNewsUrl
  constructor(private http:HttpClient) { }

  getData() {
    return this.http.get(`${this.api}/published`)
  }
}
