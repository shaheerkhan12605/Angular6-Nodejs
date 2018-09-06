import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {CityBikesService} from './city-bikes.service';

import { AppComponent } from './app.component';
import { ParkingComponent } from './parking/parking.component';
import { BikesComponent } from './bikes/bikes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'parking',
    component: ParkingComponent
  },
  {
    path: 'bikes',
    component: BikesComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ParkingComponent,
    BikesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    SlimLoadingBarModule,
    HttpClientModule
  ],
  providers: [ 
    CityBikesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
