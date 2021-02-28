import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Penguin-ears'], ['Horse-shoes']];
  public pieChartData: SingleDataSet = [50, 50];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

}
