import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { HomeService } from '../../services/home.service';
import { Response, Http, Headers } from '@angular/http';
import { UtilService } from "../../common-services/util-services";
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent {

 

  constructor(private route: ActivatedRoute, private router: Router, private translate: TranslateService, private homeService: HomeService,
  private utilService : UtilService, private http: Http,private _toastrService: ToastrService
    ) { 
       translate.setDefaultLang('en'); 
     }


   
 


}//class ends//
