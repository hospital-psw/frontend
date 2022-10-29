import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/shared/modules/loader/services/loader.service';
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
  isCreating = false

  constructor(private fs: FeedbackService, private router: Router, private loader: LoaderService) { }

  ngOnInit(): void {
  }

  onSubmit(feedback: NewFeedbackDTO){     
    this.loader.show();
    this.fs.createFeedback(feedback).subscribe(
    (response: GetFeedback) => {
      this.loader.hide();
      this.fs.showSuccess(); 
      this.router.navigate(['/'])
    },
    (error:HttpErrorResponse) => {
        this.fs.showError(error.message);
      })
}

}
