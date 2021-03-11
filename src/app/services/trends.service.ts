import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TrendsService {

  constructor(private httpClient: HttpClient) { }

  public getLoc() {
    return this.httpClient.get("http://localhost:8080/trends/getLocation");
  }

  public getSkills(){
    return this.httpClient.get("http://localhost:8080/trends/getSkills");
  }
  public getDemand(){
    return this.httpClient.get("http://localhost:8080/trends/getDemand");
  }
  public getMinExp(){
    return this.httpClient.get("http://localhost:8080/trends/getMinExp");
  }
  public getDescription(){
    return this.httpClient.get("http://localhost:8080/trends/getDescription");
  }
}
