import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/product.service';
import {Observable} from 'rxjs';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  statewiseData:Observable<any>;
  TimeSeries=[];
  TT="TT";
  public pieChartLabels: Label[]=['Total Confirmed','Total Active','Total Recovered','Total Deaths'];
  public pieChartData: SingleDataSet=[];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  
  constructor(private productService:ProductService) {
      this.statewiseData=productService.getAllState();
      this.statewiseData.forEach(element=>{
        console.log(element);
        this.TimeSeries.push(element.statewise);
        this.fetchInfo();
      })
    }
  fetchInfo()
  {
    this.TimeSeries.forEach(element=>{
      console.log(element)
      element.forEach(element1 => {
        if(element1.statecode=="TT")
        {
        
          this.pieChartData.push(parseInt(element1.confirmed))
          this.pieChartData.push(parseInt(element1.active))
          this.pieChartData.push(parseInt(element1.recovered))
          this.pieChartData.push(parseInt(element1.deaths))
        }
      });
    })
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    
  }
  public chartColors: any[] = [
    { 
      

      backgroundColor: [
        'rgba(252, 3, 136, 0.5)',
        'rgba(3, 48, 242, 0.5)',
        'rgba(3, 252, 144, 0.5)',
        'rgba(217, 35, 35, 0.5)'
     
    ]


    }];

  ngOnInit(): void {
    
  }

  
}
