import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PredictionBody } from '../interface/PredictionBody';
import { PredictionResponse } from '../interface/PredictionResponse';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PredictionService {
  private apiPredictionUrl = environment.apiCovidPrediction;

  constructor(private http: HttpClient) {}

  predict(dataz: PredictionBody): Observable<PredictionResponse> {
    return this.http.post<PredictionResponse>(
      `${this.apiPredictionUrl}/predict`,
      dataz
    );
  }

  train() {
    return this.http.get(`${this.apiPredictionUrl}/train`);
  }
}
