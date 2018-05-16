import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Configuration } from "../common-services/app-constant";
import { HttpService } from "../common-services/http-service";

@Injectable()
export class HomeService {
  constructor(private httpService: HttpService, private configuration: Configuration) {
   }


    register(username:string, password: String) {
       return this.httpService.postLogin(this.configuration.API_LOGIN_URL, {
         email: username,
         password: password
       });
     }


  
}
 