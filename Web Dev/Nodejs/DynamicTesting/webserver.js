//Necessary Packages
var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");

/*
	Create the server and have it listening on port 8081.
*/
http.createServer(function(request, response)
{
	/*
		pathname is a string that will hold the relative path to the HTML file requested.  This statement is broken down as follows:
		
			pathname - the variable receiving the object.
			url - the object from the Nodejs url package.
			.parse(request.url) - takes string data and converts it to JSON. In this case, we are passing in the url data from the request.
			.pathname - this is a property of the JSON object manufactured by the .parse(...) function. It is a string.
			.substring(1) - Converts the string that is .pathname by chopping off the first character. In the parsed pathname, the first character is a "/", which will create a problem when trying to read in the file.
	*/
	var pathname = url.parse(request.url).pathname.substring(1);
	console.log("Request for " + pathname + " received.");
	
	/*
		This code reads in the file in pathname.  Originally, this will be index.html, but after the form is submitted, it will be whatever file is specified in the action attribute of the form element.
		The callback function has the error data, if any, and the information from file specified (data).
	*/
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
			
			/*
				If the request has POST data embedded in it, then it comes from a form and we want to parse the data and deliver it to the response page.
				
				We create an ondata event listener, which will receive the POST data and send it to the callback function, loading it into the qstr parameter.
				
				Using the querystring object (qs, loaded from the Nodejs package), we can create a JSON object (qobj), which has all of the data from the form.
				
				We can then write that data to the BOTTOM of our HTML page.
				
				If the request does NOT have POST data, then simply send it as is.
				Note that each condition has its own call to end().  This has to be done synchronously.  Otherwise, the system will try to write to the buffer AFTER the response has been sent.
			*/
			if (request.method == "POST")
			{
				request.on("data", function(qstr)
				{
					var qobj = qs.parse(qstr.toString());
					
					/*
						First write the HTML page as it is received.
						Next, create a new <script> tag at the bottom of the page and assign the JSON object with the form data in it to a variable.
						This whole piece must be text so that the response.write function can handle it.
						It will append this piece of text to the bottom of the HTML page so that, when the browser sees it, it will parse it as HTML/Javascript code.
						
						The JSON static object can convert JSON objects to strings (as in this case) or strings to JSON objects (using JSON's parse function).
					*/
					response.write(data.toString());
					response.write("\n<script>data = " + JSON.stringify(qobj) + ";</script>\n");
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