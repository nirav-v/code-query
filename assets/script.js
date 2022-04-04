// declare some global variables to html elements you need to do stuff with
var startBtn = document.querySelector("#start-quiz-btn");
var timerEl = document.querySelector("#timer");
var quizBodyDiv = document.querySelector(".quiz-body");
var answerBtn = document.createElement("button");

// declare global variable for the time left
var timeLeft = 50;
var score;
// store the questions and answer choices in an array of objects
var questions = [
  {
    question: "the parameters of a function are enclosed within ____.",
    answers: ["curly-braces { }", 'quotes " " ', "parentheses ( ) ", " commas , "],
  },
  {
    question: "Objects contain ___ and value pairs",
    answers: ["property", "index", "key", "array"],
  },
];

function correctMessage(){

    var correctMessage = document.createElement("p").textContent ='Correct!'
    quizBodyDiv.append(correctMessage);
  
}

function wrongMessage(){
  var wrongMessage = document.createElement("p").textContent ='Wrong!'
  quizBodyDiv.append(wrongMessage);
}

// function to render first question at index 0

// have a function that renders the next question at the specified index
function renderFirstQuestion(index) {
  // make an h2 element and render the question from the questions array at the correct index;
  var questionHeader = document.createElement("h2");
  index = 0
  questionHeader.textContent = questions[index].question;
  quizBodyDiv.append(questionHeader);
  // rendering the buttons
for (i = 0; i < questions[index].answers.length; i++) {
    var answerBtn = document.createElement("button");
    answerBtn.textContent = questions[index].answers[i];
    // display the button
    quizBodyDiv.append(answerBtn);
    // style button
    answerBtn.setAttribute("style", "color: white; background-color: purple; font-size: 20px; padding: 5px; margin: 5px; border-radius: 10px; display: block;" )

    answerBtn.addEventListener('click', function(){
        var element = event.target;
        console.log('answer buttons work')
        if (element.textContent.includes("parentheses")){
            
            index = index + 1;
            console.log(questions[index])
          // clear the current question from the body
        clearContent(quizBodyDiv);
          // pass the new index to the renderQuestion function
        renderNextQuestion(index) 
       correctMessage()
        } else {
          timeLeft = timeLeft - 10;
          wrongMessage();
        };
    });

  } 
  
 } 

  function renderNextQuestion(index){
    for (i = 0; i < questions.length; i ++){
      var questionHeader = document.createElement("h2");
      index = i;
    }
    questionHeader.textContent = questions[index].question;
    quizBodyDiv.append(questionHeader);
  // for each item in the answers array property within the questions object, create a button and make its text content equal the string at the same index
  for (i = 0; i < questions[index].answers.length; i++) {
    var answerBtn = document.createElement("button");
    answerBtn.textContent = questions[index].answers[i];
    // display the button
    quizBodyDiv.append(answerBtn);
    // style button
    answerBtn.setAttribute("style", "color: white; background-color: purple; font-size: 20px; padding: 5px; margin: 5px; border-radius: 10px; display: block;" )

      // listen for clicks on answer btns, if they click the correct button, increase the index by 1
    answerBtn.addEventListener('click', function(){
        var element = event.target;
        console.log('answer buttons work')
        if (element.textContent.includes("key")){
            index = index + 1;
            console.log(questions[index])
            // clear current question
            clearContent(quizBodyDiv);
          // pass the new index to the renderQuestion function
          //renderNextQuestion(index) 
          correctMessage();
          renderScore()

        } else {
          timeLeft = timeLeft - 10;
          wrongMessage();
        };

        if (element.textContent.includes("key") && index === questions.length - 1){
          // call the function that renders score and intials input 
        }

    });
  }

};

  // loop through each property in answerChoice array's objects
  //for (i = 0; i < answerChoices[index].length; i++)
  //   for each property create a button element and set its text content to the value of that choice

  // answerBtn.textContent = answerChoices[index].rightAns
  // quizBodyDiv.append(answerBtn);

// when the index is > questions.length - 1, at the last question
// if they choose the correct answer on the last question, call a function that exits out of the page and displays the score and input for player initials

// make a function that creates a new h1 element, and 4 buttons assign its text content to the question, append it to the body

// after the button is clicked and the time begins decreasing on the page

// Start screen html which includes game title, instructions, and a START BUTTON
// listen for clicks on the start button which triggers a countdown timer displayed at the top of the document
// TIMER:
startBtn.addEventListener("click", function () {
  timerEl.textContent = "Time: " + timeLeft;
  var countdown = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    // stop countdown if time left goes below 0
    if (timeLeft < 0) {
      clearInterval(countdown);
      var score = timeLeft;
      console.log();
      // call the render score and initial input function
      renderScore();
    }
  }, 1000);
  // remove the quiz-body text content after clicking the start button
  clearContent(quizBodyDiv);
  renderFirstQuestion();
});

//  have a function that clears the current quiz content
function clearContent(documentElement) {
  documentElement.innerHTML = " ";
}

// listen for clicks on each of the answer choice buttons, check if the button choice matches the answer for that question

// IF the button clicked matches the correct answer for that question,
// then the current question is replaced with the next question and  "correct!" is displayed below the answer choice buttons.
// Else when the user clicks the wrong answer choice button, the remaining time decreases by 10 sec.

// IF the user gets through all the questions and the time left is > 1, that time is equal to their score
// Else  when the time left reaches 0 or less (from wrong guesses) the game automatically ends and goes to the finishing screen displaying the score.

// once the user is at the finsih screen they are given an input to type their initials
// the users initials are set in local storage along with their socre

function renderScore(){
  // clear page
  clearContent(quizBodyDiv);
  // display score on the page
  finishMessage = document.createElement("p").textContent = "All Done\n"
  quizBodyDiv.append(finishMessage)

  scoreMessage = document.createElement("p").textContent = "Your final Score is " + timeLeft + "\n";
  quizBodyDiv.append(scoreMessage)
  
  initialsInput = document.createElement("input")
  initialsInput.setAttribute("placeholder", "enter your initials here")
  quizBodyDiv.append(initialsInput)

  submitBtn = document.createElement("input");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("style", "color: white; background-color: purple; margin: 10x; padding: 5px")
  quizBodyDiv.append(submitBtn);

}

// every time a user submits their initials, a highscores page is displayed where the initials and score of previous players are retrieved from local storage and displayed on the document in descending order

// under the highscores page there is a go-back button which takes the player back to the start page.
