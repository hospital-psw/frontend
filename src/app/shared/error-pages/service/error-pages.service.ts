import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({providedIn: "root"})
export class ErrorPagesService{
    constructor(private router: Router){}

    public handleError(error: HttpErrorResponse){
        switch (error.status){
            case 403:
                return this.handleForbidden()
            default:
                return "Something went wrong..."
        }   
    }

    private handleForbidden(){
        this.router.navigate(["/error/forbidden"], { queryParams: { returnUrl: this.router.url }});
        return "Forbidden!"
    }
}