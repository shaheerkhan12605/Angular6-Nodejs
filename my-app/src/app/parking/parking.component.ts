import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CityBikesService } from '../city-bikes.service';
import {Result} from '../city-bikes.model';


@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {
	error_msg="";
  result: Result [];
  constructor(private cityService: CityBikesService, private router: Router) { }

  ngOnInit() {
    
  }

  getSlots(city){
    this.result=[];
    if(city){
      this.error_msg="";
      this.fetchData(city);
    }else{
      this.error_msg="Please Enter valid city name";
    }

  }
  fetchData(city) {
    this.cityService.getParkingSlots(city).subscribe((data: Result[]) => {
      this.result = data;
      console.log(this.result);
      console.log('Data requested ... ');
    });
  }


}
