import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SymptomStatistics } from '../interface/SymptomStatistics';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  private api = environment.apiStatistics
  constructor(private http: HttpClient, private router: Router) { }

  public getAverageSymptoms(){
    return this.http.get<SymptomStatistics[]>(`${this.api}`);
  }
}
