import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginDTO } from "./interface/LoginDTO";
import { environment } from "src/environments/environment";
import { LoginResponseDTO } from "./interface/LoginResponseDTO";
import { ToastrService } from "ngx-toastr";

@Injectable({providedIn: "root"})
export class AuthService{
    constructor(private http: HttpClient, private toastr: ToastrService){}
    api=environment.apiAuthUrl

    public showSuccess(){
        this.toastr.success("You have been successfuly logged in.","Welcome back!")
    }

    public login(data: LoginDTO){
        return this.http.post<LoginResponseDTO>(this.api, data)
    }
}