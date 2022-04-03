// declare some global variables to html elements you need to do stuff with
var startBtn = document.querySelector("#start-quiz-btn");
var timerEl = document.querySelector("#timer");

// declare global variables for the time left, question pool, the correct answers
var timeLeft = 3;

// Start screen html which includes game title, instructions, and a START BUTTON

// listen for clicks on the start button which triggers a countdown timer displayed at the top of the document

startBtn.addEventListener('click', function(){
    timerEl.textContent = "Time: " + timeLeft;
    var countdown = setInterval(function(){
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft == 0){
        clearInterval(countdown)
    }
    }, 1000);
clearContent(".quiz-body");
});

// remove the quiz-body text content after clicking the start button, and answering each question correctly by calling a clear content function
function clearContent(documentElement){
 document.querySelector(documentElement).innerHTML = " "; 
}

// the starting screen is replaced with a question and four answer buttons that are selected from an array of objects containing the question with 1 correct and 3 incorrect answer choices.
// create a new h1, assign its text content to the question, append it to the  


// after the button is clicked and the time begins decreasing on the page


// listen for clicks on each of the answer choice buttons, check if the button choice matches the answer for that question

// IF the button clicked matches the correct answer for that question, 
// then the current question is replaced with the next question and  "correct!" is displayed below the answer choice buttons.
// Else when the user clicks the wrong answer choice button, the remaining time decreases by 10 sec.

// IF the user gets through all the questions and the time left is > 1, that time is equal to their score
// Else  when the time left reaches 0 or less (from wrong guesses) the game automatically ends and goes to the finishing screen displaying the score. 

// once the user is at the finsih screen they are given an input to type their initials
// the users initials are set in local storage along with their socre

// every time a user submits their initials, a highscores page is displayed where the initials and score of previous players are retrieved from local storage and displayed on the document in descending order

// under the highscores page there is a go-back button which takes the player back to the start page.

