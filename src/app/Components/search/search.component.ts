import { OppService } from 'src/app/services/opp.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  dataSource!:any;
  displayedColumns: string[] = ['id','userEmail','description','location','skills','minExp','demand','date'];
  
  constructor(public oppService:OppService) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchOption: new FormControl("",(Validators.required)),
      fieldVal: new FormControl("", (Validators.required)),
    })
  }

  formResp(){
    console.log(this.searchForm.value.searchOption);
    console.log(this.searchForm.value.fieldVal);
    this.oppService.findOpportunity(this.searchForm.value.searchOption,this.searchForm.value.fieldVal,localStorage.getItem('userEmail')).subscribe(resp=>{
      this.dataSource = resp;
    });
  }
  

}
