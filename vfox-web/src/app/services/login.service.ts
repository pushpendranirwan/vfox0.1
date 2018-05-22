import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Configuration } from "../common-services/app-constant";
import { HttpService } from "../common-services/http-service";

@Injectable()
export class LoginService {
  constructor(private httpService: HttpService, private configuration: Configuration) {
   }

 /* login(username:string, password: String) {
    return this.httpService.postLogin(this.configuration.API_LOGIN_URL, {
      email: username,
      password: password
    });
  }

  login(username:string, password: String) {
    let creds = 'grant_type=password&username='+username+'&password='+password+'&client_id=123456
    return this.httpService.postLogin(this.configuration.API_LOGIN_URL, {creds: creds
    });
  }*/

login(username:string, password: String) {
 let creds = 'grant_type=password&username='+username+'&password='+password+'&client_id='+this.configuration.ClientId;
  return this.httpService.postLogin(this.configuration.API_LOGIN_URL, creds);
   }
  
}