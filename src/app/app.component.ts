import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/Auth/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PSW Hospital';
  private userSub: Subscription;
  isLogged = false
  
  constructor(private authService: AuthService){}
  
  ngOnInit(): void {
    this.authService.autoLogin()
    this.userSub = this.authService.user.subscribe(user =>{
      this.isLogged = !!user    
    });
  }
}
