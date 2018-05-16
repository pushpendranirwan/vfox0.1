import{Injectable}from'@angular/core';
import 'rxjs/Rx';
import {Configuration}from "../common-services/app-constant";
import {Observable}from "rxjs/Observable";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Http, Headers, Response, RequestOptions }from '@angular/http';

@Injectable()
export class HttpService {
apiUrl: string;
headers: any;
requestUrl: string;
responseData: any;
options: any;
baseUrl: any;

Login_Response: any;


constructor(private _http: HttpClient, private configuration: Configuration, private http: Http) {
    let myLocation = window.location.href;

  }


  CONTEXT_PATH: string = '';



  post(url: string, data: any): Observable<any> {
    //debugger;
    let postUrl = this.configuration.ApiUrl + url;
    return this._http.post(postUrl, JSON.stringify(data), { headers: new HttpHeaders().set('Content-Type', 'application/json') })
      .map(this.extractData)
      .catch(this.handleError);
  }

put(url: string, data: any): Observable<any> {
    //debugger;
    let postUrl = this.configuration.ApiUrl + url;
    return this._http.put(postUrl, JSON.stringify(data), { headers: new HttpHeaders().set('Content-Type', 'application/json') })
      .map(this.extractData)
      .catch(this.handleError);
  }


  postLogin(url: string, data: any): Observable<any> {
    //debugger;
    let postUrl = this.configuration.ApiUrl + url;
    return this._http.post(postUrl, JSON.stringify(data), { headers: new HttpHeaders().set('Content-Type', 'application/json') })
      .map(this.extractData)
      .catch(this.handleError);

  }







  postWithoutLogin(url: string, data: any): Observable<any> {
    ////debugger;
    let getUrl = this.configuration.ApiUrl + url;
    return this._http.post(getUrl, JSON.stringify(data), { headers: new HttpHeaders().set('Content-Type', 'application/json') })
      .map(this.extractData)
      .catch(this.handleError);
  }


putAfterLogin(url: string, data: any): Observable<any> {
      //debugger;
       let getUrl = this.configuration.ApiUrl + url;
    return this._http.put(getUrl, JSON.stringify(data), { headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('x-Auth-Token', localStorage.getItem('token')) })
      .map(this.extractData)
      .catch(this.handleError);
    //.filter(x => x.result.data.token != '') //Filter Or check the resonse data
    //.delay(2000) //Wait the response for 2 seconds

   }
   

    postAfterLogin(url: string, data: any): Observable<any> {
      //debugger;
       let getUrl = this.configuration.ApiUrl + url;
    return this._http.post(getUrl, JSON.stringify(data), { headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('x-Auth-Token', localStorage.getItem('token')) })
      .map(this.extractData)
      .catch(this.handleError);
    //.filter(x => x.result.data.token != '') //Filter Or check the resonse data
    //.delay(2000) //Wait the response for 2 seconds

   }



 private extractData(response: Response) {
    return response;
  }

  private handleError = (error: any) => {
    //this._router.navigate(['/error']);

    // if(Object.keys(error).length > 0 && error.status == 406){
    //   this._toastr.error(error.error.message);
    // }

    return Observable.of([]);
 }

 postFile(url: string, data: any) {
  //this.configuration.ApiUrl + url
  //http://192.168.10.196:8787/mohips/api/customer/fileuplaod
  let postUrl = this.configuration.ApiUrl + url;
  this.headers = new Headers();
  // if (localStorage.getItem('token')) {
  //   this.headers.set('X-Auth-Token', localStorage.getItem('token'));
  // }
  this.headers.set("Accept", "application/json; charset=utf-8");

  return this.http.post(postUrl, data, { 
    headers: this.headers
  })
    .map(this.extractData)
    .catch((error: any) => Observable.throw(error))

}



}
