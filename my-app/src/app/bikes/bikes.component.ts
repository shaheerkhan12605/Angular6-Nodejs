import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityBikesService } from '../city-bikes.service';
import {Result} from '../city-bikes.model';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  error_msg="";
  result: Result [];
  constructor(private cityService: CityBikesService, private router: Router) { }

  ngOnInit() {
  }
  getBikes(city){
  	this.error_msg="";
  	this.result=[];
  	if(city){
 		this.fetchData(city);
 	}else{
 		this.error_msg="Please Enter a valid City Name"
 	}

  }
  fetchData(city) {
    this.cityService.getFreeBikes(city).subscribe((data: Result[]) => {
      this.result = data;
      //console.log(this.result);
      console.log('Fetching requested ... ');
    });
  }
}
