import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityBikesService {
	
	uri="http://localhost:4000";

	getParkingSlots(city) {
		var obj={"city" :city};
		console.log("city name received in service"+city)
    	return this.http.post(this.uri+'/parking',obj);
  	}
  	getFreeBikes(city){
		var obj={"city" :city};
		console.log("city name received in for bikes"+city)
    	return this.http.post(this.uri+'/bikes',obj);	
  	}

  constructor(private http: HttpClient) { }

}
