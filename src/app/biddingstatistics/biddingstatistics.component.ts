import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Player } from '../models/player.model';
import { maxPlayers } from '../models/maxPlayers.model';

@Component({
  selector: 'app-biddingstatistics',
  templateUrl: './biddingstatistics.component.html',
  styleUrls: ['./biddingstatistics.component.css']
})
export class BiddingstatisticsComponent implements OnInit {

  itemsPerPage: number;
  totalItems: any;
  page: any;
  previousPage: any;

  players:Player[] =[];
  maxPlayers:maxPlayers[] = [];
  constructor(private appService:AppService) { }

  ngOnInit() {
    this.appService.getPlayerSortedByPrice().subscribe(res=>{
      this.players = res;
    })

    this.appService.getMaxPlayerByRole().subscribe(res=>{
      this.maxPlayers = res;
      console.log(res);
    })
    
  }

}
