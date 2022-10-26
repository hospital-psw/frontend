import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackPageComponent } from './components/feedback-page/feedback-page.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FeedbackPageComponent,
    FeedbackFormComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule
  ]
})
export class FeedbackModule { }
