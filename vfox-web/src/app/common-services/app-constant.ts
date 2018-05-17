export class Configuration {

   // public Server: string = 'http://crystal.tekmindz.com/';
   // public Server: string = 'http://his.psc.com.kw/';
    public Server:string = `http://192.168.10.60`;
    public ApiUrl:string = 'http://192.168.10.60/DEV/DSE/V.0.0.1/index.php/api/';
    public HomePageUrl:string = 'home';

    public HomeNavPageUrl: string = 'login';

    public AppMode: string = 'DEV'; //For PROD set 'PROD' mode;
    public ServerWithApiUrl = this.Server + this.ApiUrl;

    public ADVISOR: string = 'Advisor';
    public ADMIN: string = 'Admin';
    public CLIENT: string = 'Client';


    public SESSION_TOKEN_REFRESH_TIME:number = 20000;

    public restrictedPageForAdmin: string[] = ['/dashboard/','/dashboard/servicecenter'];
    public restrictedPageForADVISOR: string[] = ['/dashboard/'];
    public restrictedPageForUser: string[] = ['/dashboard/'] ;
     /*public restrictedPageForSC: string[] = ['/dashboard/home'];
    public restrictedPageForCompany: string[] = ['/dashboard/home'];
     */
    //*****************************Api URLs *****************************/
public API_LOGIN_URL: string = 'user/login';
public API_REGISTER_URL: string = 'visitor/createuser';


      //*****************************Api URLs Ends *****************************/

    public ADMIN_ROLE_ID: string = '1';
    public ADVISOR_ROLE_ID: string = '2';
    public CLIENT_ROLE_ID: string = '3';

    // Regex patterns
    public NUMBER_REGEX: string = '^[0-9]*$'; // eg: 123456
    public DECIMAL_UPTO_TWO_REGEX: string = '^((([0-9]{1,50}))(\.[0-9]{1,2})?$)'; // eg: 123.45
    public DATE_REGEX: string = '(0\d{1}|1[0-2])\/([0-2]\d{1}|3[0-1])\/(19|20)\d{2}';//'^((0?[1-9]|1[012])[/](0?[1-9]|[12][0-9]|3[01])[/](19|20)?[0-9]{2})*$'; //eg: 01/01/2017
    public ALPHANUMERIC_REGEX: string = '^[ a-zA-Z0-9_-]*$'; //eg: a123_g-n
    public EMAIL_REGEX: string = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'; //eg: a@b.com
    public PHONE_REGEX: string = '^[0-9-+]*$';
    public ALPHABETS_REGEX: string = '^[ a-zA-Z]*$';

    public RolesList = [
        {
            key: 'ADMIN',
            value: 'Admin'
        },{
            key: 'ADVISOR',
            value: 'Advisor'
        }, {
            key: 'CLIENT',
            value: 'Client'
        }
    ];

}