/*1*/
/*
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");
*/

/*2*/

var fs = require("fs");

var data = fs.readFile('input.txt', function (err,data)
{
	if(err)
	{
		return console.error(err);
	}
	console.log(data.toString());
});

console.log("Program Ended");


/*3*/
 /*
 var events = require("events");
 var eventEmitter = new events.EventEmitter();
 var connectHandler = function connected()
 {
	console.log("Connection Successful"); 
	eventEmitter.emit("data_received");
 }	
 
 eventEmitter.on("connection", connectHandler);
 
 eventEmitter.on("data_received", function ()
 {
	console.log("data received successfully");
 });
 
 eventEmitter.emit("connection");
 console.log("Program Ended");
 */
 