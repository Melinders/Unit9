/*Write a JavaScript program to highlight the bold words of the following paragraph by 
	changing the text color to red, on mouse over.

We have just started this section for the users (beginner to intermediate) who want to 
	work with various JavaScript problems and write scripts online to test their 
	JavaScript skill.

 Hint: wordItems = document.getElementsByTagName('strong'); // The paragraph uses 
 	<strong></strong> tags for the bold words. Change <strong> default behavior. */

 	
var strong = document.getElementsByTagName("STRONG")
var i;

for(i=0; i < strong.length; i++) {
	strong[i].addEventListener("mouseover", function() {
		for(i=0; i < strong.length; i++) {
			strong[i].style.color = "red";
		}
	} )
}

