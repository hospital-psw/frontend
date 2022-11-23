import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetFeedback } from '../../interface/GetFeedback';
import { NewFeedbackDTO } from '../../interface/NewFeedbackDTO';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})

export class FeedbackFormComponent {

  defaultAnonymous = true
  defaultPublic = false
  isCreating = false
  
  constructor(private fs: FeedbackService, private router: Router) { }

  onSubmit(feedback: NewFeedbackDTO){     
    this.isCreating = true
    this.fs.createFeedback(feedback).subscribe(
    (response: GetFeedback) => {
      this.isCreating = false
      this.fs.showSuccess(); 
      this.router.navigate(['/home'])
    },
    (error:HttpErrorResponse) => {
        this.fs.showError(error.message);
      })
  }



}
