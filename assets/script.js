// declare some global variables to html elements you need to do stuff with
var startBtn = document.querySelector("#start-quiz-btn");
var timerEl = document.querySelector("#timer");

// declare global variables for the time left, question pool, the correct answers

var timeLeft = 75;

// Start screen html which includes game title, instructions, and a START BUTTON

// listen for clicks on the start button which triggers a countdown timer displayed at the top of the document

startBtn.addEventListener('click', function(){

}, 1000);

// after the button is clicked and the time begins decreasing on the page, the starting screen is replaced with a question and four answer buttons.

// IF the time reaches 0, the next question appears and the timer restarts

// listen for clicks on each of the answer choice buttons, check if the button choice matches the answer for that question

// IF the button does not match, the time left decreases by 5 seconds
// ELSE 'correct!' displays under buttons, the time stops and resets to 0, the score increments by 1. 



