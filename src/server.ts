import app form './app';
import * as https from 'https';
import * as fs from 'fs';
const PORT = 3000;

const httpsOptions = {
  key: fs.readfileSync('./config/key.pem'),
  cert: fs.readfileSync('./config/cert.pem')
}

https.createServer(httpsOptions, app).listen(PORT, () => {
  console.log('Express Server listening on port ' + PORT);
})

import app from './app';
import * as https from 'https';
import * as fs from 'fs';
const PORT = 3000;

const httpsOptions = {
    key: fs.readFileSync('./config/key.pem'),
    cert: fs.readFileSync('./config/cert.pem')
}

https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})




//var http = require("http");

//create a server object:
//http.createServer(function(req, res) {
//    res.write("Hello World!"); //write a response to the client
//    res.end(); //end the response
//  }).listen(8080); //the server object listens on port 8080



