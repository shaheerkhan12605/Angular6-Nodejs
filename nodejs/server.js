	// import express from 'express';
	// import cors from 'cors';
	// import bodyParser from 'body-parser';

	var express=require('express');
	var cors=require('cors');
	var bodyParser=require('body-parser');
	var request = require('request');

	var app = express();
	var router = express.Router();
	
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(express.json());
	app.use(bodyParser.json());
	app.use(cors());
	app.use('/', router);
	
	router.route('/bikes').post((req, res) => {
		console.log("HERE WE GO");
		var city =req.body.city;
		var arr=[];
		request('https://api.citybik.es/v2/networks/'+city, function (error, response, body) {
			if (!error && response.statusCode == 200) {
		  		data=JSON.parse(body);
		  		stations=data.network.stations 
		  		console.log(stations.length)
		  		for ( var index in stations ) {
					    if (stations[index].free_bikes) { //if empyt slots !=0
					        arr.push({
					        	"id":index,
					        	"free_bikes":stations[index].free_bikes,
					        	"name":stations[index].name
					        });
					    }
					}
				res.send(arr);	
		  	}else{
		  		res.send(arr);
		  	}
		});
	});
	router.route('/parking').post((req, res) => {
	    var city =req.body.city;
		var arr=[];
		request('https://api.citybik.es/v2/networks/'+city, function (error, response, body) {
			if (!error && response.statusCode == 200) {
		  		data=JSON.parse(body);
		  		stations=data.network.stations 
		  		console.log(stations.length)
		  		for ( var index in stations ) {
					    if (stations[index].empty_slots) { //if empyt slots !=0
					        arr.push({
					        	"id":index,
					        	"empty_slots":stations[index].empty_slots,
					        	"name":stations[index].name
					        });
					    }
					}
				res.send(arr);	
		  	}else{
		  		res.send(arr);
		  	}
		});
	});
	app.listen(4000, () => 
			console.log('Express server running on port 4000')
	);