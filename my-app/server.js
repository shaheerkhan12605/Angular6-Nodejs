const express = require('express');
path = require('path');
bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 4000;

app.post('/parking',function (req, res) {
  console.log("parking")
});


app.post('/bikes',function (req, res) {
  console.log("bikes")
});


const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
});