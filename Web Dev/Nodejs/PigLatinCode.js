VOWELS = ["a", "e", "i", "o", "u", "y"];
switcher = [];
var fs = require("fs");

var data = fs.readFile('PigLatinInput.txt', function (err,data)
{
	if(err)
	{
		return console.error(err);
	}
	data = data.toString();
	console.log(data);
	data.split(" ");
	for (var i = 0; i < data.length; i++)
	{
		for (var a = 0; a < data[i].length; a++)
		{
			if(VOWELS.includes(data[i][a]) == true)
			{
				var holder = data[i][0];
				newString = data[i].splice(0, data[i][a]-1);
				data[i][0] = data[i][a];
				data[i][a] = holder;
				break;
			}
		}	
	}
})
console.log("Reading...");
