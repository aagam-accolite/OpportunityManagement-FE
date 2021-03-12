import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TrendsService } from 'src/app/services/trends.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit,OnChanges {

  view: [number,number] = [600, 300];
  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel1 = 'Location';
  xAxisLabel2 = 'Skills';
  xAxisLabel3 = 'Demand';
  xAxisLabel4 = 'Min Experience';
  xAxisLabel5 = 'Description';

  showYAxisLabel = true;
  yAxisLabel = 'Count';
  timeline = true;
  colorScheme = "vivid";

  loc!:any;
  skills!:any;
  demand!:any;
  minxp!:any;

  constructor(private trendService: TrendsService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.trendService.getLoc().subscribe(data=>{
      this.loc = data;
    })
    this.trendService.getSkills().subscribe(data=>{
     this.skills = data;
   })
   this.trendService.getDemand().subscribe(data=>{
     this.demand = data;
   })
   this.trendService.getMinExp().subscribe(data=>{
     this.minxp = data;
   })
  }

  ngOnInit(): void {
   this.trendService.getLoc().subscribe(data=>{
     this.loc = data;
   })
   this.trendService.getSkills().subscribe(data=>{
    this.skills = data;
  })
  this.trendService.getDemand().subscribe(data=>{
    this.demand = data;
  })
  this.trendService.getMinExp().subscribe(data=>{
    this.minxp = data;
  })
  }

}
