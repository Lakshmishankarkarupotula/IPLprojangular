import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from './models/team.model';
import { Player } from './models/player.model';
import { roleCountDTO } from './models/rolecountDTO.model';
import { teamAmount } from './models/teamamount.model';
import { maxPlayers } from './models/maxPlayers.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl = environment.baseUrl;
  teamLabel : string;
  role:string;
  player:Player[] = [];
  roleCount:roleCountDTO[] = [];
  constructor(private http: HttpClient) {
  }

  getTeamLabels(): Observable<any> {
    let url = `${this.baseUrl}labels`;
    return this.http.get(url);
  }

  getTeamDetails(teamLabel:any): Observable<Player[]> {
    console.log(teamLabel);
    let url = `${this.baseUrl}${teamLabel}`;
    return this.http.get<Player[]>(url);
  }

  getTeamStatistics(): Observable<Team[]> {
    let url = `${this.baseUrl}all`;
    return this.http.get<Team[]>(url);
  }

  getRoleCountTeam(teamLabel:any):Observable<roleCountDTO[]>{
    let url = `${this.baseUrl}role/${teamLabel}`;
    return this.http.get<roleCountDTO[]>(url);
    
  }
  getPlayerByRole(role:any,teamLabel:String):Observable<Player[]>{
    let url = `${this.baseUrl}${role}?teamLabel=${teamLabel}&role=${role}`;
    return this.http.get<Player[]>(url);
    
  }
  getTeamAmountSpent():Observable<teamAmount[]>{
    let url = `${this.baseUrl}totalamount`;
    return this.http.get<teamAmount[]>(url);
    
  }

  getPlayerSortedByPrice():Observable<Player[]>{
    let url = `${this.baseUrl}players/all`;
    return this.http.get<Player[]>(url);
  }
  getMaxPlayerByRole():Observable<maxPlayers[]>{
    let url = `${this.baseUrl}maxamoutbyrole`;
    return this.http.get<maxPlayers[]>(url);
  }
}
