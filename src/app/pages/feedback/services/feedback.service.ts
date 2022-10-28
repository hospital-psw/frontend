import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs'
import { NewFeedbackDTO } from '../interface/NewFeedbackDTO';
import { GetFeedback } from '../interface/GetFeedback';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  api = environment.apiFeedbackUrl

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  public createFeedback(feedback : NewFeedbackDTO): Observable<GetFeedback>{
    feedback.creatorId = 1;
    return this.http.post<GetFeedback>(`${this.api}/add`, feedback);
  }

  public showSuccess(){
    this.toastr.success("Your feedback has been sent!", "Thank You!");
  }

  public showError(message: string){
    this.toastr.error(message,"Error");
  }
}
