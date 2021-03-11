import { Component, NgZone, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  googleLogoURL = 'https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg';
  user: User = new User();

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private ngZone: NgZone,
    private loginService: LoginService,
    private router: Router
    // private gapi: GoogleApiService
    ) {
      this.matIconRegistry.addSvgIcon('logo', this.domSanitizer.bypassSecurityTrustResourceUrl(this.googleLogoURL));
      window['onSignIn'] = (user: any) => ngZone.run( () => {
        this.onSignIn(user);
      });

      this.loginService.getAll().subscribe(resp =>{
        console.log(resp);
      });
    }

ngOnInit(): void {
}

  onSignIn(googleUser:any) {
    var profile = googleUser.getBasicProfile();
    // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    // user1: User;
    // user = new User(profile.getName(), profile.getEmail(), new Date);
    this.user.name = profile.getName();
    this.user.email = profile.getEmail();

    this.loginService.loginFromRemote(this.user).subscribe(
      resp => {
        this.loginService.setUserId(this.user.email)
        localStorage.setItem('userName',this.user.name)
        localStorage.setItem('userEmail',this.user.email)
        localStorage.setItem('token',profile.getId());
        this.router.navigateByUrl('/home');
      }
    );
}


}
