import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  constructor(private httpClient:HttpClient) { }

  public getAudit(){
    return this.httpClient.get("http://localhost:8080/audit/getAll");
  }
}
