import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerstatisticsComponent } from './playerstatistics/playerstatistics.component';
import { TeamstatisticsComponent } from './teamstatistics/teamstatistics.component';
import { BiddingstatisticsComponent } from './biddingstatistics/biddingstatistics.component';


const routes: Routes = [
  {
      path:'',
      component:HomeComponent,
      pathMatch:'full'
  },
  {
      path:'home',
      component:HomeComponent,
  },
  {
      path:'playerstatistics',
      component:PlayerstatisticsComponent,
  },
  {
      path:'teamstatistics',
      component:TeamstatisticsComponent,
  },
  {
      path:'biddingstatistics',
      component:BiddingstatisticsComponent,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
