var http = require('http');
var fs = require ('fs');
var url = require('url');

choices = ["Hello World", "Buenos Dias"];

http.createServer(function(request, response)
{
	/*
		The Access-Control-Allow-Origin response header indicates whether the response can be shared with resources with the given origin.

		For requests without credentials, the server may specify "*" as a wildcard, thereby allowing any origin to access the resource.
	*/
	response.setHeader("Access-Control-Allow-Origin", "*");

	var requestName = url.parse(request.url).pathname.substring(1);
	console.log("Request for " + requestName + " received.");
	
	/*
		This conditional checks to see if the request is our very specific AJAX request.
	*/
	if(requestName == "getstring")
	{
		var greeting = choices[parseInt(Math.random() * choices.length)];	//Choose a random greeting.
		response.writeHead(200, {"Content-Type": "text/plain"});
		
		/*
			Whereas a request for a file will read in the text from the file and write that out to the response, an AJAX request is not loading a new page.  It only asks for information from the server.  The requesting page will then use that information on the page without reloading.
			
			In order to pass back that information, it is written to the response object, the same way text from a file is written.
		*/
		response.write(greeting);
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