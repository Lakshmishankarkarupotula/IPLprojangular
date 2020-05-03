import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Player } from '../models/player.model';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { roleCountDTO } from '../models/rolecountDTO.model';
import { ChartSelectEvent } from 'ng2-google-charts';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  labels: string[];
  players: Player[] = [];
  playersByRole: Player[] = [];
  roleCountDTO:roleCountDTO[] = [];
  role:any;
  teamLabel:string;
  public pieChart: GoogleChartInterface;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getTeamLabels().subscribe(res => {
      this.labels = res["labels"];
      console.log(this.labels);
    })

  }
  getTeamDetails(event) {
    this.teamLabel = event.target.value;
    this.appService.getTeamDetails(this.teamLabel).subscribe(res => {
      this.players = res;
    })
    this.getRoleCountTeam();
    
  }

  getRoleCountTeam() {
    this.appService.getRoleCountTeam(this.teamLabel).subscribe(res => {
      this.roleCountDTO = res;
      console.log(res);
      let dataTable = [];
      dataTable.push(['Role', 'No of players']);
      for(let i = 0; i<this.roleCountDTO.length;i++){

        dataTable.push([this.roleCountDTO[i].roleName,this.roleCountDTO[i].count]);
      }
      
    this.pieChart = {
      chartType: 'PieChart',
      dataTable,
      //firstRowIsData: true,
      options: { 'title': this.teamLabel },
    };
    })
  }

  getPlayerByRole(event) {
    console.log(event.target.value);
    this.role = event.target.value;
    this.appService.getPlayerByRole(this.role.roleName,this.teamLabel).subscribe(res => {
      this.players = res;
      console.log(this.players);
    })
    
  }
  public select(event: ChartSelectEvent) {
    console.log(" this is" + event.selectedRowFormattedValues);
    console.log(" this is team label " + this.teamLabel);
    this.role = event.selectedRowValues;
    this.appService.getPlayerByRole(this.role[0],this.teamLabel).subscribe(res => {
      this.playersByRole = res;
      console.log(this.playersByRole);
      
    })
  }


}
