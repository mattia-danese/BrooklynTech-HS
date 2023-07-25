var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");

/*
	checkForLogin
	
	Looks for login information in the POST data and parses it out to a JSON object for the response if it does.
	
	Parameters:
		qobj - the POST data
*/
function checkForLogin(qobj)
{
	//If there's no login, just return.
	if (!qobj.login)
	{
		console.log("Login not found");
		return;
	}
	
	/*
		The file is read in as blocking code because nothing else can process until this data is read in.
		
		The input string is split into an array and each item in the array is parsed into a JSON object.
	*/
	var loginData = fs.readFileSync("dbase.txt");
	loginData = loginData.toString().split(";");
	for (var i = 0; i < loginData.length; i++)
	{
		var dataObj = JSON.parse(loginData[i]);
		
		/*
			If both the username and password match an entry in the data file, then the user has been found and there's no need to search further.  The firstname and lastname properties are added to the POST data so that that information is available to the destination page.
		*/
		if (dataObj.uname == qobj.uname && dataObj.pword == qobj.pword)
		{
			qobj.firstname = dataObj.firstname;
			qobj.lastname = dataObj.lastname;
			return;
		}
	}
}

http.createServer(function(request, response)
{
	var pathname = url.parse(request.url).pathname.substr(1);
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
			if (request.method == "POST")
			{
				request.on("data", function(qstr)
				{
					var qobj = qs.parse(qstr.toString());
					
					/*
						The call to checkForLogin passes through qobj, which holds the POST data.  If the function finds the username/password match, it will alter qobj.
						
						A parameter is passed by value, meaning that the parameter at the other end of the call is not the same variable as the one passed in the argument.  It is a separate variable that holds the same value.  Remember, though, that an object is different from a primitive value, like a number.  When you pass an object, the value is its memory address.  That means that, when you change the properties, you are changing properties at the address.  Therefore, updating an object, even if it's a parameter, affects the original also.
						
						This can be useful when writing certain functions, depending on whether you want the function to change the original, like checkForLogin, or just return an altered copy, like many string and array functions.
					*/
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
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081");