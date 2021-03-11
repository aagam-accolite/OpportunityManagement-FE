import { ShareDataService } from './../../../services/share-data.service';
import { Opportunity } from './../../../models/Opportunity';
import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { OppService } from 'src/app/services/opp.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  oppForm!: FormGroup;
  userEmail!:any;
  editableData!:any;
  updateOpportunityPayload!:any;
  constructor(private oppService: OppService,private router: Router,private shareData:ShareDataService) {
   }

  update(){
    this.updateOpportunityPayload = {...this.oppForm.value, userEmail:this.editableData.userEmail,id:this.editableData.id};
    console.log(this.updateOpportunityPayload);
    this.oppService.editOpportunity(this.updateOpportunityPayload,localStorage.getItem('userEmail')).subscribe(resp=>{
      console.log("Updated : " + resp);
      this.router.navigateByUrl('/opp');
    })
  }


  ngOnInit(): void {
    this.editableData = this.shareData.getData();
    this.oppForm = new FormGroup({
      description: new FormControl(this.editableData.description, (Validators.required, Validators.minLength(3), Validators.maxLength(50))),
      location: new FormControl(this.editableData.location, (Validators.required, Validators.maxLength(150), Validators.minLength(4))),
      skills: new FormControl(this.editableData.skills, (Validators.required)),
      minExperience: new FormControl(this.editableData.minExperience, (Validators.required)),
      demand: new FormControl(this.editableData.demand, (Validators.required)),
      date: new FormControl(this.editableData.date, (Validators.required)),
    });
  }

}
