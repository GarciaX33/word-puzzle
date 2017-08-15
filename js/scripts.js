//BUSINESS LOGIC
var replaceVowels = function(sentenceWithVowels) {
  var vowels = ["A", "a", "E", "e", "I", "i", "O", "o","U", "u"];

  for(var i = 0; i < sentenceWithVowels.length; i++) {
     for(var k = 0; k < vowels.length; k++) {
       sentenceWithVowels = sentenceWithVowels.replace(vowels[k], "-")
     };
  };

  return sentenceWithVowels;
};
// USER LOGIC
$(document).ready(function() {
  $("#blanks-form").submit(function(event) {
    event.preventDefault();
    var userSentence = $("input#word").val();
    var vowelLessSentence = replaceVowels(userSentence)

    $(".outputtext").text(vowelLessSentence);
  });
});
