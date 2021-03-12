import { LoginService } from 'src/app/services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  name?;
  constructor(private authService: SocialAuthService,private router: Router,private loginService:LoginService) {
    if(localStorage.getItem("userName")){
      this.isLoggedIn = true;
      this.name = localStorage.getItem("userName");
    }
    else{
      this.router.navigateByUrl('/');
    }
   }

   signOut(){
     this.authService.signOut();
     localStorage.clear();
     this.router.navigateByUrl('/');
   }

  ngOnInit(): void {
  }

}
