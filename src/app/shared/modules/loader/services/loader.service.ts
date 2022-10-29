import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private ngxservice: NgxUiLoaderService) { }

  public show(){
    this.ngxservice.start();
  }

  public hide(){
    this.ngxservice.stop();
  }
}
