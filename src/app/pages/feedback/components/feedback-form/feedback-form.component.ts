import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {

  defaultAnonymous = "yes"
  defaultPublic = "no"
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form)
  }

}
