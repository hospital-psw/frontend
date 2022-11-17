import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginDTO } from "../interface/LoginDTO";
import { environment } from "src/environments/environment";
import { LoginResponseDTO } from "../interface/LoginResponseDTO";
import { ToastrService } from "ngx-toastr";
import { BehaviorSubject, ReplaySubject, tap } from "rxjs";
import { User } from "../model/user.module";
import { Router } from "@angular/router";

@Injectable({providedIn: "root"})
export class AuthService{
    user = new BehaviorSubject<User>(null as any);
    api=environment.apiAuthUrl
    
    constructor(private http: HttpClient, private toastr: ToastrService, private router: Router){}

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
        }))
    }

    private handleLogin(dto: LoginResponseDTO){
        const expirationDate = new Date(new Date().getMinutes() + +dto.expiresIn)
        const user = new User(dto.email, dto.id, dto.token, expirationDate);
        this.user.next(user);
        localStorage.setItem('userData', JSON.stringify(user));
    }

    public logout(){
        this.user.next(null as any);
        this.router.navigate([''])
        this.toastr.success("You have been successfully logged out.","Goodbye!");
    }

    public autoLogin(){
       const userData:{
        id: number,
        email: string,
        _token: string,
        _tokenExpirationDate: string
        } = JSON.parse(localStorage.getItem('userData') || '{}');
        console.log(userData)
        if(!userData){
            return;
        }

        const loadedUser = new User(userData.email,userData.id,userData._token,new Date(userData._tokenExpirationDate))

        if(loadedUser.token){
            this.user.next(loadedUser)
        }
    }

}