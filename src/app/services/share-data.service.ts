import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  editableData : any;
  constructor() { }

  setData(editableData:any):any{
    this.editableData = editableData;
  }
  
  getData(){
    return this.editableData;
  }

}
