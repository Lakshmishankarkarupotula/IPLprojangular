import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { TeamstatisticsComponent } from './teamstatistics/teamstatistics.component';
import { PlayerstatisticsComponent } from './playerstatistics/playerstatistics.component';
import { BiddingstatisticsComponent } from './biddingstatistics/biddingstatistics.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TeamstatisticsComponent,
    PlayerstatisticsComponent,
    BiddingstatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpHeaders,
    FormsModule,
    Ng2GoogleChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
