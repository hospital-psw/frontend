import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/Auth/services/auth.service';
import { CoronaResultsData } from '../shared/modal-dialog/interface/CoronaReultsData';
import { ModalDialogService } from '../shared/modal-dialog/modal-dialog.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy{
  
  private userSub: Subscription;
  isLogged: boolean = false
  isToggled: boolean= false
  name: string = ''

  constructor(private authService: AuthService, 
              private http: HttpClient, 
              private router: Router, 
              private modalService: ModalDialogService) { }
  
  ngOnInit(){
    this.userSub = this.authService.user.subscribe(user =>{
      this.isLogged = !!user
      this.name = user.email    
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  
  onHome(){
    this.router.navigate(['/app/home'])
  }

  onLogout(){
    this.authService.logout();
  }

  onToggle(){
    this.isToggled = !this.isToggled;
  }

}
