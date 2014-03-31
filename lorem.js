$(document).ready(function(){
	
	$("#submit").click(function(){
		
		//enter all of your words here - the more the better.
		var wordbank = ["Enter", "your", "words", "like", "this", "the", "more", "you", "have", "the", "better"]; 
		
		
		//This function shuffles all of the words in the wordbank and generates sentences of random lengths.
		function makeASentence(wordbank){
			var words = _.shuffle(wordbank); 

			var numWordsInSentence = Math.floor( (Math.random() + 3) * 2);

			var sentence = [];

			var temp;

			for(var i = 0; numWordsInSentence > i; i++){
				temp = words[i];
				sentence.push(temp);
			}
			
			sentence = sentence.join(" ");
			sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
			sentence = sentence + ".";
			
			return sentence;
		};
		
		
		//This function makes paragraphs based on the number entered in the text field and the sentences generated in the function
		//above.
		function makeAParagraph(){
			var numOfSentences = 8;
			var paragraph = [];
			for(var i = 0; i < numOfSentences; i++){
				
				paragraph.push(makeASentence(wordbank));
				
			}
			paragraph = paragraph.join(" ");
			
			return paragraph;
		}
		
		//This function gets the number of paragraphs wanted by the user.
		function getNumberOfParagraphs(){
			var paraWanted = $("#paragraphs").val();
			return paraWanted;
			
		}
		
		//This function combines all of the generated paragraphs to a block of text.
		function makeText(){
			var numToMake = getNumberOfParagraphs();
			var text = [];
			
			for(var i = 0; i < numToMake; i++){
				text.push(makeAParagraph());
			}
			
			text = text.join("</p><p>");
			$("#generated-text").html("<p>" + text + "</p>");
		}
	
		//call the function and show the generated text <div>
		makeText();
		$("#generated-text").show();
	});
	
});