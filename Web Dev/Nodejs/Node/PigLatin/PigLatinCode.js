VOWELS  = ["A", "E", "I", "O", "U", "Y", "a", "e", "i", "o", "u", "y"];

var fs = require("fs");
var data = fs.readFile("Message.txt", function (err, data)
{
	data = data.toString();
	console.log(data);
	data = data.split(" ");
	var x = 0;
	var ending = "";
	var pig = "";
	for (var i = 0; i < data.length; i++)
	{
		for (var a = 0; a < data[i].length; a++)
		{
			if(VOWELS.includes(data[i][a]) == true)
			{		
				x = data[i].indexOf(data[i][a]);
				ending = data[i].slice(0,x);
				pig = data[i].slice(x);
				pig = pig + ending + "ay";
				data[i] = pig;
				break;
			}
		}
	}
	console.log(data.join(" "));
});
console.log("Reading...");
