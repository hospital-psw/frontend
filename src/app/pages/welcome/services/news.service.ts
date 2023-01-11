import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { News } from '../interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  api = environment.apiNewsUrl
  bloodBankApi = environment.apiBloodBankUrl
  constructor(private http:HttpClient) { }

  getData() {
    return this.http.get<News>(`${this.api}/published`)
  }

  getBloodBankName(id: number){
    return this.http.get<any>(`${this.bloodBankApi}/${id}`)
  }
}
