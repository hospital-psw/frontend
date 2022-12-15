import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { ForgotPasswordDTO } from "../interface/ForgotPasswordDTO";
import { ResetPasswordDTO } from "../interface/ResetPasswordDTO";
import { AuthService } from "./auth.service";

@Injectable({providedIn: "root"})
export class EmailService{
    api = environment.apiAuthBaseUrl
    constructor(private http: HttpClient, private authService: AuthService){}

    public sendForgotPasswordEmail(dto: ForgotPasswordDTO): Observable<any>{
        return this.http.post<ForgotPasswordDTO>(`${this.api}/forgot/password`, dto)
    }

    public resetPassword(dto: ResetPasswordDTO): Observable<any>{
        return this.http.post<ResetPasswordDTO>(`${this.api}/reset/password`, dto)
    } 
}