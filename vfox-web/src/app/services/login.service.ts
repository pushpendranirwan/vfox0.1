import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Configuration } from "../common-services/app-constant";
import { HttpService } from "../common-services/http-service";

@Injectable()
export class LoginService {
  constructor(private httpService: HttpService, private configuration: Configuration) {
   }

 /* login(username:string, password: string) { 

    console.log('LOGIN Response', JSON.stringify({
      username: username,
      password: password
    }));

      return this.httpService.postWithoutLogin(this.configuration.API_LOGIN_URL, {
        email: username,
        password: password
    });

  } */

  login(username:string, password: String) {
    return this.httpService.postLogin(this.configuration.API_LOGIN_URL, {
      email: username,
      password: password
    });
  }
  
}
 