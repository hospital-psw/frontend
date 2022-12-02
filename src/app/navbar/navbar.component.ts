import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/Auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy{
  
  private userSub: Subscription;
  isLogged = false
  isToggled = false

  constructor(private authService: AuthService, private http: HttpClient) { }
  
  ngOnInit(){
    this.userSub = this.authService.user.subscribe(user =>{
      this.isLogged = !!user    
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  
  onLogout(){
    this.authService.logout();
  }

  onToggle(){
    this.isToggled = !this.isToggled;
  }
}
