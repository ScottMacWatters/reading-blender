var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.use(express.static('public',{extensions : ['html'], index: "index.html"}));

var envPort = process.env.PORT ? process.env.PORT : 3000;

var ports = [envPort];
for(var i in ports){
  app.listen(ports[i], function(){
    console.log('port ' + ports[i] + ' open.');
  });
}
