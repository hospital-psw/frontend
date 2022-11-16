import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetFeedback } from '../../interface/GetFeedback';
import { NewFeedbackDTO } from '../../interface/NewFeedbackDTO';
import { FeedbackService } from '../../services/feedback.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})

export class FeedbackFormComponent implements OnInit {

  defaultAnonymous = true
  defaultPublic = false
  isCreating = false
  isValid = true
  
  constructor(private fs: FeedbackService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(feedback: NewFeedbackDTO){     
    if(feedback.message == ''){
      this.isValid = false;
      return;
    }
    this.isCreating = true
    this.fs.createFeedback(feedback).subscribe(
    (response: GetFeedback) => {
      this.isCreating = false
      this.fs.showSuccess(); 
      this.router.navigate(['/'])
    },
    (error:HttpErrorResponse) => {
        this.fs.showError(error.message);
      })
  }



}
