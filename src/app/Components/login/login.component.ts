import { Component, NgZone, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  googleLogoURL = 'https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg';
  data: any;
  user:User = new User();
  name:any;
  email:any;

  constructor(private authService: SocialAuthService,private loginService:LoginService,private router:Router) {

  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.getDetail();
  }
  
  getDetail(){
    this.authService.authState.subscribe((userdata) => {
      this.user.name=userdata.name;
      this.user.email=userdata.email;
      this.loginService.loginFromRemote(this.user).subscribe(resp=>{
        localStorage.setItem('userName',this.user.name);
        localStorage.setItem('userEmail',this.user.email);
        this.router.navigateByUrl('/home');
      });
    });
   
  }

  ngOnInit(): void {
  }

}
