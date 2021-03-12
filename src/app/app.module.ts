import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Social Media , Form and HTTP Connection
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {GoogleLoginProvider} from 'angularx-social-login';


// Material UI
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import {MatCardModule} from '@angular/material/card';
import { LoginService } from './services/login.service';
import { HomeComponent } from './Components/home/home.component';
import { OpportunityComponent } from './Components/opportunity/opportunity.component';
import { AddComponent } from './Components/opportunity/add/add.component';
import { UpdateComponent } from './Components/opportunity/update/update.component';
import { SearchComponent } from './Components/search/search.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { TrendsComponent } from './Components/trends/trends.component';
import { AuditComponent } from './Components/audit/audit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    OpportunityComponent,
    AddComponent,
    UpdateComponent,
    SearchComponent,
    TrendsComponent,
    AuditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgxChartsModule,
    MatGridListModule,
    SocialLoginModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '431647069953-otu3aeraed2sh5eknao15c3l1rquc16u.apps.googleusercontent.com'
          )
        }
      ]
    } as SocialAuthServiceConfig,
  },LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
