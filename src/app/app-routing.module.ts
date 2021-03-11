import { AuditComponent } from './Components/audit/audit.component';
import { TrendsComponent } from './Components/trends/trends.component';
import { UpdateComponent } from './Components/opportunity/update/update.component';
import { SearchComponent } from './Components/search/search.component';
import { AddComponent } from './Components/opportunity/add/add.component';
import { OpportunityComponent } from './Components/opportunity/opportunity.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginComponent},
  {path: 'home', pathMatch: 'full', component: HomeComponent},
  {path: 'opp', pathMatch: 'full', component: OpportunityComponent},
  {path: 'opp/add', pathMatch: 'full', component: AddComponent},
  {path: 'opp/update', pathMatch: 'full', component: UpdateComponent},
  {path: 'search', pathMatch: 'full', component: SearchComponent},
  {path: 'opp/audit', pathMatch: 'full', component: AuditComponent},
  {path:'trend',pathMatch:'full',component:TrendsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
