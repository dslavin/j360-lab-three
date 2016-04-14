var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();

questions[0] = "1) Harry Potter's mother's name is...";
choices[0] = new Array();
choices[0][0] = "Lucy";
choices[0][1] = "Lori";
choices[0][2] = "Lily";
choices[0][3] = "Lynn";
answers[0] = choices[0][2];

questions[1] = "2) Harry Potter's father's name is...";
choices[1] = new Array();
choices[1][0] = "John";
choices[1][1] = "Joe";
choices[1][2] = "Jim";
choices[1][3] = "James";
answers[1] = choices[1][3];

questions[2] = "3) Who tells Harry that he is a wizard?";
choices[2] = new Array();
choices[2][0] = "Hagrid";
choices[2][1] = "Snape";
choices[2][2] = "Dumbledore";
choices[2][3] = "Voldemort";
answers[2] = choices[2][0];

questions[3] = "4) In the first book, Harry is trying to find the Sorcerer's...";
choices[3] = new Array();
choices[3][0] = "Sandwich";
choices[3][1] = "Stone";
choices[3][2] = "Sling";
choices[3][3] = "Sand";
answers[3] = choices[3][1];

questions[4] = "5) In the second book, Tom Riddle is actually...";
choices[4] = new Array();
choices[4][0] = "Voldemort";
choices[4][1] = "Harry's brother";
choices[4][2] = "Harry's father";
choices[4][3] = "Sirius Black";
answers[4] = choices[4][0];

questions[5] = "6) In the final scene of the series, who does Harry name his son after?";
choices[5] = new Array();
choices[5][0] = "Voldemort and Peter Pettigrew";
choices[5][1] = "Ron and Hermoine";
choices[5][2] = "Dumbledore and Snape";
choices[5][3] = "Malfoy and Goyle";
answers[5] = choices[5][2];

// response for getting 100%
response[0] = "Excellent, top marks!";
// response for getting 90% or more
response[1] = "Excellent, try again to get 100%!"
// response for getting 70% or more
response[2] = "Well done, that is a good score, can you do better?";
// response for getting over 50%
response[3] = "Nice one, you got more than half of the questions right, can you do better?";
// response for getting 40% or more
response[4] = "You got some questions right, you can do better!";
// response for getting 20% or more
response[5] = "You didn't do too well, why not try again!?";
// response for getting 10% or more
response[6] = "That was pretty poor!  Try again to improve!";
// response for getting 9% or less
response[7] = "Oh dear, I think you need to go back to school (or try again)!";