import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Team } from '../models/team.model';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { teamAmount } from '../models/teamamount.model';
import { ChartSelectEvent } from 'ng2-google-charts';
import { roleCountDTO } from '../models/rolecountDTO.model';

@Component({
  selector: 'app-teamstatistics',
  templateUrl: './teamstatistics.component.html',
  styleUrls: ['./teamstatistics.component.css']
})
export class TeamstatisticsComponent implements OnInit {

  teams: Team[] = [];
  roleCount: roleCountDTO[] = [];
  data: Team[] = [];
  amountSpent: teamAmount[];
  public columnChart: GoogleChartInterface;
  public pieChart: GoogleChartInterface;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getTeamStatistics().subscribe(res => {
      this.teams = res;
    })

    this.appService.getTeamAmountSpent().subscribe(res => {
      this.amountSpent = res;
      let dataTable = [];
      dataTable.push(["Amount Spent", "Team"]);
      this.amountSpent.forEach(element => {
        dataTable.push([element.teamName, element.amount]);
      });

      this.drawColumnChart(dataTable);
    })


  }
  drawColumnChart(dataTable: any) {

    this.columnChart = {  // use :any or :GoogleChartInterface
      chartType: 'ColumnChart',
      dataTable: dataTable
    };

  }
  //getting player count by role
  getRolecount(event: ChartSelectEvent) {
    let label = event.selectedRowValues[0];
    console.log(label);
    this.appService.getRoleCountTeam(label).subscribe(res => {
      this.roleCount = res;
      let data = [];
      data.push(['Role', 'No of players']);

      this.roleCount.forEach(element => {
        data.push([element.roleName,element.count])
      });


      this.drawPieChart(data,label);
    })
  }

  drawPieChart(data:any,label:any){
    this.pieChart = {
      chartType: 'PieChart',
      dataTable : data,
      //firstRowIsData: true,
      options: { 'title': label },
    };   
  }
}
