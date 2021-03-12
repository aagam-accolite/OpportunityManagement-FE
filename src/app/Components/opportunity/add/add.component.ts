import { Opportunity } from './../../../models/Opportunity';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OppService } from 'src/app/services/opp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  
  oppForm!: FormGroup;
  email!:any;
  addOpportunityPayload!:Opportunity;
  constructor(private oppService: OppService,private router: Router) {
    this.email = localStorage.getItem("userEmail");
  }

  ngOnInit(): void {
    this.oppForm = new FormGroup({
      description: new FormControl("", (Validators.required, Validators.minLength(3), Validators.maxLength(50))),
      location: new FormControl("", (Validators.required, Validators.maxLength(150), Validators.minLength(4))),
      skills: new FormControl("", (Validators.required)),
      minExperience: new FormControl("", (Validators.required)),
      demand: new FormControl("", (Validators.required)),
      date: new FormControl("", (Validators.required)),
    });
   }
   formResp(){
    this.addOpportunityPayload = {...this.oppForm.value, userEmail:this.email};
    console.log(this.addOpportunityPayload);
    this.oppService.addOpportunity(this.addOpportunityPayload,localStorage.getItem('userEmail')).subscribe(resp=>{
      console.log('Added Value' + resp);
      this.router.navigateByUrl('/opp');
    })
   }

}
