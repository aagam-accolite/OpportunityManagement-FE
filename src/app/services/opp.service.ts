import { Opportunity } from './../models/Opportunity';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class OppService {

  BASE_URL = "http://localhost:8080/opportunity";
  headers:any;

  constructor(private httpClient: HttpClient) {
    
   }

  public getAllOpp(email:any) {
  this.headers= new HttpHeaders()
   .set('content-type', 'application/json')
   .set('Access-Control-Allow-Origin', '*')
   .set('Email',email);
    return this.httpClient.get("http://localhost:8080/opportunity/getAll",{ 'headers': this.headers });
  }

  public del(id:number,email:any) {
    this.headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Email',email);
    return this.httpClient.post("http://localhost:8080/opportunity/delete/" + id,id,{ 'headers': this.headers });
  }

  public addOpportunity(opportunity:Opportunity,email:any) {
    this.headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Email',email);
    return this.httpClient.post("http://localhost:8080/opportunity/add/", opportunity,{ 'headers': this.headers });
  }
  public editOpportunity(opportunity:Opportunity,email:any) {
    this.headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Email',email);
    return this.httpClient.post("http://localhost:8080/opportunity/update/", opportunity,{ 'headers': this.headers });
  }
  
  public findOpportunity(colName:any,val:any,email:any)
  {
    this.headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Email',email);
    return this.httpClient.get("http://localhost:8080/opportunity/search/"+colName.toLowerCase()+"/"+val.toLowerCase(),{ 'headers': this.headers });
  }
}
