function getNumericSuffix(num)
{
	if (num % 100 != 11 && num % 10 == 1)
	{
		return "st";
	}
	else
	{
		if (num % 100 != 12 && num % 10 == 2)
		{
			return "nd";
		}
		else
		{
			if (num % 100 != 13 && num % 10 == 3)
			{
				return "rd";
			}
			else
			{
				return "th";
			}
		}
	}		
}
function getRandomInteger(lower, upper)
{
	multiplier = upper - (lower - 1);
	rnd = parseInt(Math.random() * multiplier) + lower;
	
	return rnd;
}

function genCardDeckTEMP()
{
	deck = [];
	suits = ["spades", "clubs", "hearts", "diamonds"];
	kind = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
				
	for (var i = 0; i < suits.length; i++)
	{
		for (var x = 0; x < kind.length; x++)
		{
			var g = 0;
			
			card = {};
			card.suit = suits[i];
			card.kind = kind[x];
						
			deck.push(card);
		}
	}
}