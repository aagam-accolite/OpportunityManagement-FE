import { AuditService } from './../../services/audit.service';
import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AuditComponent implements OnInit {


  dataSource:any;
  expandedElement!: any;
  columnsToDisplay = ['id', 'date', 'userName', 'userEmail','operation'];
  constructor(private auditService:AuditService) { }

  ngOnInit(): void {
    this.auditService.getAudit().subscribe(resp=>{
      //console.log(resp);
      this.dataSource = resp;
    })
  }

}
