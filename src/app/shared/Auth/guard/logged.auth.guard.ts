import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private toastr : ToastrService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): | boolean 
       | UrlTree
       | Promise<boolean | UrlTree> 
       | Observable<boolean | UrlTree> {
       return this.authService.user.pipe(
        take(1),
        map(user =>{
          const isAuth = !!user;
            if(isAuth){
              this.toastr.warning("You must be logged out to access this path!");
              return this.router.createUrlTree(['/app/home']);
            }
            
            return true;
        })

       )
    
    
  }
  
}
