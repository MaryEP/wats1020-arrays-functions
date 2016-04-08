/* In this assignment we will explore the use of Functions to encapsulate logic, 
and we will use an Array to help us process text.  (think of everytime you've seen a "... Click here to read more" link). 
The simplest way to truncate text is often to truncate according to the number of characters in the String. 
Unfortunately, that might cut off a word halfway.

Base the truncation on the number of words, and only cut out full words. This is a little less precise because we don't 
know the exact number of characters we will be dealing with.
Build a function that accepts a String and a number (Integer) of words to keep. 
That function will then return a String containing the truncated text.*/

//1. Create a Function in `truncate.js` called `truncateWords()` that accepts the following 2 arguments:
  //* A. `longText` (a String of text) 
  //* B. numWords (an Integer representing how many words to keep in the text)

//* 2. Use the `split()` function to split the String into an Array
	
var truncateWords = function(longText, numWords)
{
	
	//* 3. Use the `length` attribute to find the number of words in the Array (not characters!)
	var textArray = longText.split(' ');
	var totalWords = textArray.length;
	console.log(totalWords);
	var removeWords = (totalWords - numWords);
	console.log(removeWords);
	// 7 words should be removed
	textArray.splice(numWords, removeWords); 
	//console.log(textArray);
	
	textArray.push("...");
	
	console.log(textArray);
	var joinString = textArray.join(' ');
	console.log(joinString);
	return joinString;
};

var originalText = "There are two hard things in Computer Science: Cache invalidation, naming things, and off-by-one errors.";
var wordCount = 8;
var shortText = truncateWords(originalText, wordCount);

//* 4. Determine how many words should be removed from the Array (15 y totalWords - 8 x numWords = removeWords)
//* 5. Remove those words from the Array using the `splice()` function
//* 6. Add an additional String item to the Array to put an ellipses (...) into the Array
//shortText[shortText.length] = ". . .";     
//* 7. Use the `join()` function to combine the items in the Array into a String again
//* 8. Return the truncated String from the Function
//* 9.Output the results to the `console.log`
console.log("originalText: " + originalText);
console.log('shortText: ' + shortText)






