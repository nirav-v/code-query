// declare some global variables for the start page html elements you need to do stuff with
var bodyEl = document.querySelector("body");
var mainEl = document.querySelector(".content");
var startBtn = document.querySelector("#start-quiz-btn");
var timerEl = document.querySelector("#timer");
var quizBodyDiv = document.querySelector(".quiz-body");
var answerBtn = document.createElement("button");

// creating the and styling the initials input form
initialsInput = document.createElement("input");
initialsInput.setAttribute("id", "initials");
initialsInput.setAttribute("type", "text");
initialsInput.setAttribute("placeholder", "Enter your initials here");

// creating and styling the submit button
submitBtn = document.createElement("input");
submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute(
  "style",
  "color: white; background-color: purple; margin: 10x; padding: 5px"
);

// creating and styling the go back button
var goBackBtn = document.createElement("button");
goBackBtn.textContent = "Go Back";
goBackBtn.setAttribute("style", "background-color: purple; color: white");
goBackBtn.addEventListener('click', function(){
  window.location.href = "index.html"
}) 
//-> want to make button refresh page on click, but including this method here prevents page from loading entirely

// declare global variable for the time left and score
var timeLeft = 50;
var score;
var score = timeLeft;

// globally create empty array to hold new player scores
var playerStats = [];

// store the questions and answer choices in an array of objects
var questions = [
  {
    question: "the parameters of a function are enclosed within ____.",
    answers: [
      "curly-braces { }",
      'quotes " " ',
      "parentheses ( ) ",
      " commas , ",
    ],
  },
  {
    question: "Objects contain ___ and value pairs",
    answers: ["property", "index", "key", "array"],
  },
  // {
  //   question: "Data types in JavaScript DO NOT include ___",
  //   answers: ["arrays", "strings", "elements", "undefined"]
  // },
  // {
  //   question: "To call a function when you click a button, you can use ___",
  //   answer: ["click caller", "querySelector", "an eventListener", "attribute"]
  // }
];

// function to display the message "Correct!"
function correctMessage() {
  var correctMessage = (document.createElement("p").textContent = "Correct!");
  quizBodyDiv.append(correctMessage);
}

// function that displays the message "Wrong"
function wrongMessage() {
  var wrongMessage = (document.createElement("p").textContent = "Wrong!");
  quizBodyDiv.append(wrongMessage);
}

// function to render first question at index 0

// have a function that renders the next question at the specified index
function renderFirstQuestion(index) {
  // make an h2 element and render the question from the questions array at the correct index;
  var questionHeader = document.createElement("h2");
  index = 0;
  questionHeader.textContent = questions[index].question;
  quizBodyDiv.append(questionHeader);
  // creating a button for each answer choice
  for (i = 0; i < questions[index].answers.length; i++) {
    var answerBtn = document.createElement("button");
    answerBtn.textContent = questions[index].answers[i];
    // display the button on the page
    quizBodyDiv.append(answerBtn);
    // styling button
    answerBtn.setAttribute(
      "style",
      "color: white; background-color: purple; font-size: 20px; padding: 5px; margin: 5px; border-radius: 10px; display: block;"
    );

    answerBtn.addEventListener("click", function (event) {
      var element = event.target;
      // console.log('answer buttons work')
      if (element.textContent.includes("parentheses")) {
        index = index + 1;
        // console.log(questions[index])
        // clear the current question from the body
        clearContent(quizBodyDiv);
        // pass the new index to the renderQuestion function
        renderNextQuestion(index);
        correctMessage();
      } else {
        timeLeft = timeLeft - 10;
        wrongMessage();
      }
    });
  }
}

function renderNextQuestion(index) {
  for (i = 0; i < questions.length; i++) {
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
    answerBtn.setAttribute(
      "style",
      "color: white; background-color: purple; font-size: 20px; padding: 5px; margin: 5px; border-radius: 10px; display: block;"
    );

    // listen for clicks on answer btns, if they click the correct button, increase the index by 1
    answerBtn.addEventListener("click", function (event) {
      var element = event.target;
      // console.log('answer buttons work')
      if (
        element.textContent.includes("key") ||
        element.textContent.includes("element") ||
        element.textContent.includes("eventListener")
      ) {
        index = index + 1;
        // console.log(questions[index])
        // clear current question
        clearContent(quizBodyDiv);
        // pass the new index to the renderQuestion function
        //renderNextQuestion(index)
        correctMessage();
        renderScore();
      } else {
        timeLeft = timeLeft - 10;
        wrongMessage();
      }

      if (
        element.textContent.includes("key") &&
        index === questions.length - 1
      ) {
        // call the function that renders score and intials input
      }
    });
  }
}

// Start screen html which includes game title, instructions, and a START BUTTON
// listen for clicks on the start button which triggers a countdown timer displayed at the top of the document
// TIMER:
var countdown; // made this global to stop same timer in another function
startBtn.addEventListener("click", function () {
  timerEl.textContent = "Time: " + timeLeft; // so initial starting time also shows 
  countdown = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft 
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



function renderScore() {
  // clear page
  clearContent(quizBodyDiv);
  // stop the timer
  clearInterval(countdown);
  // display score on the page
  finishMessage = document.createElement("p").textContent = "All Done\n";
  quizBodyDiv.append(finishMessage);

  scoreMessage = document.createElement("p").textContent =
    "Your final Score is " + timeLeft + "\n";
  quizBodyDiv.append(scoreMessage);

  quizBodyDiv.append(initialsInput);

  quizBodyDiv.append(submitBtn);

  // make an object with key being the initials and value being the score (timeLeft)

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // button click does nothing if user does not enter anything
    if (!initialsInput.value) {
      return;
    }
    //Attempted:
    // create and object that holds player's initials and their score, then push the object to an array
    // did not work: JSON parsing this object as a string from local storage rendered [object Object] on page
    // var highScore = {
    //   initials: initialsInput.value,
    //   score: timeLeft,
    // };

    // // push object onto player stats array and set it in local storage
    // //playerStats, declared globally as an empty array, becomes an array of objects

  // get the last highScore from local storage and push it onto the array
  if (JSON.parse(localStorage.getItem("player"))){
    var player = JSON.parse(localStorage.getItem("player"));
    for (var i = 0; i < player.length; i ++){
      playerStats.push(player[i])
    }
  }

  // playerStats.push(highScore);
  playerStats.push(initialsInput.value + " - " + timeLeft) // the best I could do.
 
  localStorage.setItem("player", JSON.stringify(playerStats)); 

    // // clear whole page when player submits initials
    clearContent(bodyEl);
    clearContent(quizBodyDiv);

    // render the items from the array in an ordered list (descending order)
    var scoreboardHeaderEL = (document.createElement("h2").textContent =
      "Highscores");
    document.body.append(scoreboardHeaderEL);

    var scoreListEL = document.createElement("ol");
    document.body.append(scoreListEL);
    var playerScoreListItems = document.createElement("li");

    for (var i = 0; i < (JSON.parse(localStorage.getItem("player"))).length; i++){
      var playerScoreListItems = document.createElement("li");
      playerScoreListItems.textContent = (JSON.parse(localStorage.getItem("player")))[i];
      scoreListEL.append(playerScoreListItems);
    }


    //goBackBtn.addEventListener('click', location.reload())
    document.body.append(goBackBtn);
  });
}



