var http = require('http');
var fs = require ('fs');
var url = require('url');
var qs = require('querystring');
var piglatin = require('./piglatin');	//Requires a nodejs file that I wrote.

http.createServer(function(request, response)
{
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
	response.setHeader("Access-Control-Allow-Headers", "X-Requested-With, contenttype");
	response.setHeader("Access-Control-Allow-Credentials", true);

	var requestJSON = url.parse(request.url);
	var requestName = requestJSON.pathname.substring(1);
	console.log("Request for " + requestName + " received.");
	
	if(requestName == "ajaxrequest")
	{
		response.writeHead(200, {"Content-Type": "text/plain"});
		
		/*
			This process depends on data from the query string.  The URL has already been parsed into the requestJSON object.  The "search" property of that object is the querystring that was created when making the AJAX request.  Use qs to parse that query string (the substring takes off the "?" at the beginning.  Once the query string has been parsed into a JSON object, you can access each property by its name.
		*/
		var searchStr = qs.parse(requestJSON.search.substring(1));
		response.write(piglatin.convertToPigLatin(searchStr.estr));
		response.end();
	}
	else
	{
		fs.readFile(requestName, function(err, fileData)
		{
			if (err)
			{
				console.log(err);
				response.writeHead(404, {"Content-Type": "text/html"});
			}
			
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(fileData.toString());
			response.end();
		});
	}
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081");