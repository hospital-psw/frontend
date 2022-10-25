import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackPageComponent } from './components/feedback-page/feedback-page.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';



@NgModule({
  declarations: [
    FeedbackPageComponent,
    FeedbackFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeedbackModule { }
