import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../../services/login.service';
import { Response, Http, Headers } from '@angular/http';
import { UtilService } from "../../common-services/util-services";
import { ValidationService } from '../../common-services/validation-services';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  loginForm: FormGroup;
  //res: any;
  error: boolean = false;
  errorMsg: string = '';
  

  constructor(private route: ActivatedRoute, private router: Router, private translate: TranslateService, private loginService: LoginService,
  private utilService : UtilService, private http: Http,private _toastrService: ToastrService
    ) { 
       translate.setDefaultLang('en');
        if (this.utilService.getData('loginDataDetail') !== null) {
            if (this.utilService.getData('loginDataDetail').roleId.toString()) {
                this.router.navigate(['dashboard']);
            }
        }
     }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required, ValidationService.emailValidator]),
      password: new FormControl(null, [Validators.required, ValidationService.passwordValidator, Validators.minLength(8)]),
    });
  }

 /* switchLanguage(language: string) {
    this.translate.use(language); 
  }  */

   
  onSubmit() {  
    let obj = this.loginForm.value;   
    if (obj.username !== '' || obj.password !== '') {
    this.loginService.login(obj.username, obj.password).subscribe(
      (response) => {
       // console.log('Type Of Response 2: ',this.utilService.isEmpty(response));
        if(this.utilService.isEmpty(response)){
          this._toastrService.error("Please Enter Correct Username or Password", 'Oops!');
        }
        if (response.statusCode === 200) { 
          debugger;
           let loginDataTest = {
                            role: "Admin",
                            roleId: 1,
                            loggedIn: 'true'
                        }
          this.utilService.setData(loginDataTest, 'loginDataDetail');
          //set token and get profile
          //debugger;
          localStorage.setItem('token', response.objectResponse.access_token);
          console.log('Login Response: ', response);
          this.router.navigate(['dashboard']);
        } else {
          this.errorMsg = response.message; //"Your username OR password is invalid !";
          this.error = true;
          this.loginForm.reset();
          // (<FormControl>this.loginForm.controls['email']).setValue('');
          // (<FormControl>this.loginForm.controls['password']).setValue('');

      }    
      },

      (error) => {
        console.log('Login error: ', error);
        this.utilService.logError(error);
        this.errorMsg = error;
        this.error = true;
      },
      () => { console.log('Login Complete'); }   


    );
  } else {
    this.errorMsg = ' Email OR Password cannot be empty !';
    this.error = true;
}

  }


}//class ends//
