import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { HomeService } from '../../services/home.service';
import { Response, Http, Headers } from '@angular/http';
import { UtilService } from "../../common-services/util-services";
import { ValidationService } from '../../common-services/validation-services';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent {

  registerForm: FormGroup;
   //res: any;
   error: boolean = false;
   errorMsg: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private translate: TranslateService, private homeService: HomeService,
  private utilService : UtilService, private http: Http,private _toastrService: ToastrService
    ) { 
       translate.setDefaultLang('en'); 
     }

  ngOnInit() {
    var formBuilder = new FormBuilder();
    this.registerForm = formBuilder.group({

      username: new FormControl(null, [Validators.required, ValidationService.emailValidator]),
      password: new FormControl(null, [Validators.required, ValidationService.passwordValidator, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
    }, { validator: ValidationService.confirmPasswords('password', 'confirmPassword') });

  }


   onSubmit() {
       let obj = this.registerForm.value;
       if (obj.username !== '' || obj.password !== '') {
       this.homeService.register(obj.username, obj.password).subscribe(
         (response) => {
          // console.log('Type Of Response 2: ',this.utilService.isEmpty(response));
           if(this.utilService.isEmpty(response)){
             this._toastrService.error("Something went wrong please try again", 'Oops!');
           }
           if (response.statusCode === 200) {

             console.log('Register Response: ', response);
             this.router.navigate(['home']);
           } else {
             this.errorMsg = response.message; //"Your username OR password is invalid !";
             this.error = true;
             this.registerForm.reset();

         }
         },

         (error) => {
           console.log('Registration error: ', error);
           this.utilService.logError(error);
           this.errorMsg = error;
           this.error = true;
         },
         () => { console.log('Registration Complete'); }


       );
     } else {
       this.errorMsg = ' Email OR Password cannot be empty !';
       this.error = true;
   }

     }

 


}//class ends//
