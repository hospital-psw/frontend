import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetFeedback } from '../../interface/GetFeedback';
import { NewFeedbackDTO } from '../../interface/NewFeedbackDTO';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {

  defaultAnonymous = true
  defaultPublic = false
  
  constructor(public fs: FeedbackService) { }

  ngOnInit(): void {
  }

  onSubmit(feedback: NewFeedbackDTO){     
    this.fs.createFeedback(feedback).subscribe(
      (response: GetFeedback) => 
      {
        console.log(response)
      },
      (error:HttpErrorResponse) => {
        error.message
      }
      )
  }

}
