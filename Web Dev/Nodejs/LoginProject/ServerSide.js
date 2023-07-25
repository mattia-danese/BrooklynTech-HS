var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");

http.createServer(function(request, response){
	
	var pathname = url.parse(request.url).pathname.substring(1);
	console.log("Request for " + pathname + " received.");
	
	fs.readFile(pathname, function(err, data)
	{
		if (err)
		{
			console.log(err);
			response.writeHead(404, {"Content-Type": "text/html"});
		}
		else
		{
			response.writeHead(200, {"Content-Type": "text/html"});
		
	
			//event listener for input data
			request.on("data", function(qstr)
			{
				//creates array of JSON strings
				var Alldata = fs.readFileSync('data.txt');
				Alldata = Alldata.toString().split(";");
				
				var qobj = qs.parse(qstr.toString());
				console.log(qobj);
				for(var i = 0; i < Alldata.length; i++)
				{
					if((qobj.usern == Alldata[i].username) && (qobj.pword == Alldata[i].password))
					{
						response.write(data.toString());
						response.write("\n<script>data = " + JSON.stringify(qobj) + ";</script>\n");
						response.end();
					}
				}
			});
		}
	});
}).listen(8081);
	
	
	
