import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginDTO } from "../interface/LoginDTO";
import { environment } from "src/environments/environment";
import { LoginResponseDTO } from "../interface/LoginResponseDTO";
import { ToastrService } from "ngx-toastr";
import { Subject, tap } from "rxjs";
import { User } from "../model/user.module";

@Injectable({providedIn: "root"})
export class AuthService{
    user = new Subject<User>();
    
    constructor(private http: HttpClient, private toastr: ToastrService){}
    api=environment.apiAuthUrl

    public showSuccess(){
        this.toastr.success("You have been successfuly logged in.","Welcome back!");
    }

     public showError(message: string){
        this.toastr.error(message,"Error!")
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
    }
}