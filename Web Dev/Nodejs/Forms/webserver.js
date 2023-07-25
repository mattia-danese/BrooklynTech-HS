var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");

http.createServer(function(request, response)
{
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");
	fs.readFile(pathname.substr(1), function(err, data)
	{
		if (err)
		{
			console.log(err);
			response.writeHead(404, {"Content-Type": "text/html"});
		}
		else
		{
			response.writeHead(200, {"Content-Type": "text/html"});
			if(request.method == "POST")
				//console.log("POST");
				request.on("data", function(qstr)
				{
					console.log(qs.parse(qstr.toString()));
				});
			response.write(data.toString());
		}
		response.end();
	});
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081");