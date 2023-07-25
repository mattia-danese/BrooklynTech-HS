var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");


http.createServer(function(request, response)
{
	var pathname = url.parse(request.url).pathname.substr(1);
	console.log("Request for " + pathname + " received.");
	checkPath(pathname,response,request);
}).listen(8081);

function checkForLogin(qobj)
{

	var loginData = fs.readFileSync("dbase.txt");
	loginData = loginData.toString().split(";");
	for (var i = 0; i < loginData.length; i++)
	{
		var dataObj = JSON.parse(loginData[i]);
		if (dataObj.uname == qobj.uname && dataObj.pword == qobj.pword)
		{
			qobj.firstname = dataObj.firstname;
			qobj.lastname = dataObj.lastname;
			return;
		}
	}
}

function checkPath(pathname,response,request)
{
	if(pathname == "welcome.html")
	{
		logFunc(pathname,response,request);
		
	}
	if(pathname == "index.html" && request.method == "POST")
	{
		regFunc(pathname,response,request);
	}
	if((pathname == "index.html" && request.method == "GET") || (pathname == "register.html" && request.method == "GET"))
	{
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
				response.write(data.toString());
				response.end();
			}
		});
	}
}

function logFunc(pathname,response,request)
{
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
			if (request.method == "POST")
			{
				request.on("data", function(qstr)
				{
					var qobj = qs.parse(qstr.toString());
					checkForLogin(qobj);
					
					response.write(data.toString()); 
					response.write("<script>data = " + JSON.stringify(qobj) + ";</script>\n");
					response.end();
				});
			}
			else
			{
				response.write(data.toString());
				response.end();
			}
		}
	});
}

function regFunc(pathname,response,request)
{
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
			if (request.method == "POST")
			{
				request.on("data", function(qstr)
				{
					var qobj = qs.parse(qstr.toString());
					var loginData = fs.readFileSync("dbase.txt");
					loginData = loginData.toString().split(";");
					for (var i = 0; i < loginData.length; i++)
					{
						var dataObj = JSON.parse(loginData[i]);
						if(dataObj.uname == qobj.uname)
						{
							response.write("Username already exists");
							response.write(data.toString());
							response.end();
							return;
						}
					}
					fs.appendFile("dbase.txt", ';{"uname":"' + qobj.uname + '", "pword":"' + qobj.pword + '", "firstname":"' + qobj.firstname + '", "lastname":"' + qobj.lastname + '"}', function(err)
								  {
									if (err){
												return;
											}}); 
					response.write(data.toString());
					response.end();
				});
			}
		}
	});
}



console.log("Server running at http://127.0.0.1:8081");