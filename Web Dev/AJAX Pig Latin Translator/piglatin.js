//Constants
VOWELS = ["A", "E", "I", "O", "U"];
CODE_A = "A".charCodeAt(0);
CODE_Z = "Z".charCodeAt(0);

/*
	isLetter
	Determines whether or not a character is a letter.
	
	Parameters:
		ch - the character to check
		
	Returns:
		true if the character is a letter, false otherwise.
*/
function isLetter(ch)
{
	return ch.toUpperCase().charCodeAt(0) >= CODE_A && ch.toUpperCase().charCodeAt(0) <= CODE_Z;
}

/*
	The exports keyword allows this function to be used by other files that require it.
*/
exports.convertToPigLatin = function(pigString)
{
	console.log("Translating " + pigString + "...");
	
	//Split the text into individual words.
	pigArray = pigString.split(" ");
	pigString = "";	//Used to eventually reconstruct the text as a single string.
	
	for (var i = 0; i < pigArray.length; i++)
	{
		/*
			In order to account for punctuation, the code checks the last character of each word to see if it is a letter.  If it is, it moves on.  Otherwise, it cuts the last character off of the word and stores it in punctuation.
		*/
		var punctuation = "";
		if (!isLetter(pigArray[i][pigArray[i].length - 1]))
		{
			punctuation = pigArray[i][pigArray[i].length - 1];
			pigArray[i] = pigArray[i].substring(0, pigArray[i].length - 1);
		}
		
		/*
			This loop continues to execute for as long as there are consonants at the beginning of the word.  If it finds a consonant at the beginning of the word, it moves that consonant to the end of the word.
		*/
		while(VOWELS.indexOf(pigArray[i][0].toUpperCase()) < 0)
		{
			pigArray[i] = pigArray[i].substring(1) + pigArray[i][0];
		}
		
		/*
			With all of the leading consonants now at the end of the word, add the "ay" and the punctuation (if there is any).
			Add the word and a new space to the end of the reconstruction string.
		*/
		pigArray[i] += "ay" + punctuation;
		pigString += pigArray[i] + " ";
	}
	
	//Output the string.
	return pigString;
}
