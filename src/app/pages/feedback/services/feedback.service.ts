import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs'
import { NewFeedbackDTO } from '../interface/NewFeedbackDTO';
import { GetFeedback } from '../interface/GetFeedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  api = environment.apiFeedbackUrl

  constructor(private http: HttpClient) { }

  public createFeedback(feedback : NewFeedbackDTO): Observable<GetFeedback>{
    feedback.creatorId = 1;
    return this.http.post<GetFeedback>(`${this.api}/add`, feedback);
  }
}
