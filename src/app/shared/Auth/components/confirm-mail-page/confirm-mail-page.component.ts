import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-mail-page',
  templateUrl: './confirm-mail-page.component.html',
  styleUrls: ['./confirm-mail-page.component.scss']
})
export class ConfirmMailPageComponent {

  constructor(@Inject(DOCUMENT) private document: Document){}
  
  handleClick(){
   this.document.location.href = 'https://gmail.com';
  }
}
