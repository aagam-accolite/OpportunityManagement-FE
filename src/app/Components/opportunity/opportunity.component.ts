import { ShareDataService } from './../../services/share-data.service';
import { OppService } from './../../services/opp.service';
import { Component, OnInit , } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.scss']
})
export class OpportunityComponent implements OnInit {
  dataSource?:any;
  editableData?:any;
  currentuser?:any;
  displayedColumns: string[] = ['id','userEmail','description','location','skills','minExp','demand','date','actions'];
  constructor( private oppService: OppService,private router: Router,private sharedData:ShareDataService) {
    
  }

  ngOnInit(): void {
    this.currentuser = localStorage.getItem('userEmail');
    console.log("currentUser" + this.currentuser);
    this.view();
  }

  ngOnChange(){
    this.view();
    this.router.navigateByUrl('/opp');
  }
  view(){
    this.oppService.getAllOpp(localStorage.getItem('userEmail')).subscribe(resp =>{
      this.dataSource = resp;
    })
  }
  edit(item:any){
    console.log(item);
    this.sharedData.setData(item);
    this.router.navigateByUrl('/opp/update');
  }
  delete(item:any){
    //console.log(item.id);
    this.oppService.del(item.id,localStorage.getItem('userEmail')).subscribe(resp=>{
      console.log("Data Deleted Response: " + resp);
      this.dataSource = this.dataSource.filter((u: { id: any; }) => u.id !== item.id);
    })
    this.view();
    this.router.navigateByUrl('/opp');
  }

  add(){
    this.router.navigateByUrl('opp/add');
  }
}


