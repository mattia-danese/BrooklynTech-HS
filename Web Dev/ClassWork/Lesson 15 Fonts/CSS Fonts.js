FIVE_SPACE_INDENT = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

BTN_CAPTIONS = ["Move to font-family", 
"Move to font-size", 
"Move to font-weight", 
"Move to font-style", 
"Move to text-decoration", 
"Move to text-align", 
"Shorthand it"];

INSTRUCTIONS = ["The font-family property in CSS tells the page which type of font to use for a specific element.<br /><br />Whatever font you specify must exist on the client machine or it will default to the standard.  That's why it's better to stick with common fonts.",
"The font-size property changes the size of your font.<br /><br />Many properties in CSS have values that include measurements.  A measurement in CSS is usually a number followed by a unit of measure.<br /><br />For fonts. the most common unit of measure is points (pt).  <b>Only fonts use points</b>.<br /></br>Other units of measure include:<br />inches (in)<br />centimeters(cm)<br />pixels (px)<br />",
"The font-weight property in CSS changes the font from normal to bold.<br /><br />The &lt;b&gt; tag is currently still legal in HTML 5.  It makes text bold and is useful for quick styling.  Note that one of the reasons CSS is preferable to HTML for styling is that you can change the look and feel of a page simply by introducing a new style sheet as opposed to having to alter the HTML.  With some of the more intricate aspects of CSS at our disposal, there should be no styling done using HTML.", 
"The font-style property changes the font from normal to italics.<br /><br />The &lt;i&gt; tag is still legal in HTML 5.", 
"The text-decoration property handles underlining.<br /><br />The &lt;u&gt; tag is deprecated in HTML 5 and should never be used.", 
"The text-align property can be used to position text on a line.  The text-align property only works with block elements, such as divs.  It will not work with inline elements such as spans.", 
"Since fonts have multiple properties in CSS, there is a shorthand for setting many of them at once.  There are several CSS properties that are like this.<br /><br />Use the <b>font</b> property to set the values using the shorthand.<br /><br />The order of the values is font-style, font-weight, font-size, font-family.  They need to be in order if you include all 4, but the browser will recognize them if one or more or missing because they all use different value types.<br /><br />The font shorthand will not work unless you are setting AT LEAST the size AND family.<br /><br />Since text-decoration and text-align are not part of the font group of properties, they are not included in the shorthand."];

CODE_PROPERTIES = ["font-family", 
"font-size",  
"font-weight",
"font-style",
"text-decoration", 
"text-align", 
"font"];

FAMILY = 0, SIZE = 1, WEIGHT = 2, STYLE = 3, DECORATION = 4, ALIGN = 5, SHORTHAND = 6;

function initialize()
{
	btnIdx = 0;
	
	codeText = document.getElementById("code");
	instructionText = document.getElementById("instructions");
	previousButton = document.getElementById("prevbtn");
	nextButton = document.getElementById("nextbtn");
	sampleText = document.getElementById("sample");
	fontSizeOut = document.getElementById("fontsize");
	inorderButtons = document.getElementById("inorder");
	freeNavigationButtons = document.getElementById("freenav");
	controlPanels = document.getElementById("ctrlpnls").getElementsByTagName("div");
	
	codeValues = ["comic sans ms", "14pt", "normal", "normal", "none", "left"];

	
	display();
}

function moveIdx(modifier)
{
	btnIdx = modifier;
	
	if (btnIdx < 0)
		btnIdx = 0;
		
	if (btnIdx == BTN_CAPTIONS.length - 1)
	{
		inorderButtons.style.display = "none";
		freeNavigationButtons.style.display = "block";
	}
		
	updateStyle();
}

function updateStyle()
{
	sampleText.style.fontFamily = codeValues[FAMILY];
	sampleText.style.fontSize = codeValues[SIZE];
	sampleText.style.fontWeight = codeValues[WEIGHT];
	sampleText.style.fontStyle = codeValues[STYLE];
	sampleText.style.textDecoration = codeValues[DECORATION];
	sampleText.style.textAlign = codeValues[ALIGN];
		
	display();
}

function changeMeasurement(measurement)
{
	codeValues[SIZE] = parseInt(codeValues[SIZE]) + measurement;
	
	updateStyle();
}

function changeSize(modification)
{
	var size = parseInt(codeValues[SIZE]) + modification;
	if (size < 1)
		size = 1;
	var measurement = codeValues[SIZE].substring(codeValues[SIZE].length - 2);
	codeValues[SIZE] = size + measurement;
	updateStyle();
}

function changeProperty(idx, modification)
{
	codeValues[idx] = modification;
	updateStyle();
}

function display()
{
	instructionText.innerHTML = INSTRUCTIONS[btnIdx];

	if (btnIdx == SHORTHAND)
	{
		codeText.innerHTML = FIVE_SPACE_INDENT + CODE_PROPERTIES[DECORATION] + ":" + codeValues[DECORATION] + ";<br />";
		codeText.innerHTML += FIVE_SPACE_INDENT + CODE_PROPERTIES[ALIGN] + ":" + codeValues[ALIGN] + ";<br />";
		codeText.innerHTML += FIVE_SPACE_INDENT + CODE_PROPERTIES[SHORTHAND] + ":" + codeValues[STYLE] + " " + codeValues[WEIGHT] + " " + codeValues[SIZE] + " " + codeValues[FAMILY] + ";<br />";
	}
	else
	{
		codeText.innerHTML = "";
		for (var i = 0; i <= btnIdx; i++)
		{
			codeText.innerHTML += FIVE_SPACE_INDENT + CODE_PROPERTIES[i] + ":" + codeValues[i] + ";<br />";
		}
	}
		
	for (var i = 0; i < controlPanels.length; i++)
		controlPanels[i].style.display = "none";
	
	controlPanels[btnIdx].style.display = "block";
	
	if (btnIdx == 0)
	{
		previousButton.style.display = "none";
		nextButton.innerHTML = BTN_CAPTIONS[btnIdx + 1];
	}
	else
	{
		if (btnIdx == BTN_CAPTIONS.length - 1)
		{
			previousButton.innerHTML = BTN_CAPTIONS[btnIdx - 1];
			nextButton.style.display = "none";
		}
		else
		{
			previousButton.innerHTML = BTN_CAPTIONS[btnIdx - 1];
			nextButton.innerHTML = BTN_CAPTIONS[btnIdx + 1];
			previousButton.style.display = "inline";
			nextButton.style.display = "inline";
		}
	}
	
	//Font Size control panel only
	fontSizeOut.innerHTML = codeValues[SIZE];
}
