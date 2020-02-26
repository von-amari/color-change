
var colors = ["black", "green", "yellow", "purple", "pink", "red"];
var letters = ["blue", "white",  "cyan", "magenta", "seafoam"];
 	document.addEventListener("click", function() {

 		var colorIndex = parseInt(Math.random()*colors.length + 1);
	document.body.style.backgroundColor= colors[colorIndex];

	var colorLetters = parseInt(Math.random()*letters.length + 1);
	document.querySelector("h1").style.color = letters[colorLetters];
 });



