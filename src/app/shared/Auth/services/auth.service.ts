import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginDTO } from "../interface/LoginDTO";
import { environment } from "src/environments/environment";
import { LoginResponseDTO } from "../interface/LoginResponseDTO";
import { ToastrService } from "ngx-toastr";
import { BehaviorSubject, catchError, ReplaySubject, tap, throwError } from "rxjs";
import { User } from "../model/user.module";
import { Router } from "@angular/router";
import { JWTService } from "./jwt.service";

@Injectable({providedIn: "root"})
export class AuthService{
    private tokenExpirationTimer: any
    user = new BehaviorSubject<User>(null as any);
    api=environment.apiAuthUrl
    
    constructor(private http: HttpClient, 
                private toastr: ToastrService, 
                private router: Router,
                private decoder: JWTService){}

    public showSuccess(){
        this.toastr.success("You have been successfully logged in.","Welcome back!");
    }

     public showError(message: string){
        this.toastr.error(message,"Error!")
    }

    public isLogged(){
        return !!this.user
    }

    public login(data: LoginDTO){
        return this.http.post<LoginResponseDTO>(this.api, data).pipe(tap(response=>{
            this.handleLogin(response)
        })).pipe(catchError(this.handleError))
    }

    private handleLogin(dto: LoginResponseDTO){
        const expirationDate = new Date(new Date().getTime() + dto.expiresIn*60000);
        const user = new User(dto.email, dto.id, dto.token, expirationDate);
        this.user.next(user);
        this.autoLogout(dto.expiresIn*60000)
        localStorage.setItem('userData', JSON.stringify(user));
    }

    public autoLogin(){
       const userData:{
        id: number,
        email: string,
        _token: string,
        _tokenExpirationDate: string
        } = JSON.parse(localStorage.getItem('userData') || '{}');
        if(!userData){
            return;
        }

        const loadedUser = new User(userData.email,userData.id,userData._token,new Date(userData._tokenExpirationDate))

        if(loadedUser.token){
            this.user.next(loadedUser)
            this.autoLogout(new Date(userData._tokenExpirationDate).getTime() - new Date().getTime())
        }
    }

    public logout(){
        this.user.next(null as any);
        this.router.navigate([''])
        this.toastr.success("You have been successfully logged out.","Goodbye!");
        localStorage.removeItem('userData')
        if(this.tokenExpirationTimer){
            clearTimeout(this.tokenExpirationTimer)
        }
        this.tokenExpirationTimer = null;
    }


    //expireIn is in minutes
    public autoLogout(expireIn: number){
        this.tokenExpirationTimer = setTimeout(() =>{
            this.logout()
        }, expireIn);
    }


    private handleError(errorResp: HttpErrorResponse){
        let errorMessage = "An unknown error occurred!"
        if(!errorResp.error || errorResp.error.type){
            return throwError(errorMessage);
        }
        return throwError(errorResp.error);
    }
}