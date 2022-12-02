import { Token } from "@angular/compiler";
import { Injectable, NgModule } from "@angular/core";
import jwtDecode from "jwt-decode";

@Injectable()
@NgModule()
export class JWTService{
    constructor(){}

    public decodeToken(token: string){
        return jwtDecode(token);
    }
}