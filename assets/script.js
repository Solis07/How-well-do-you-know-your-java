var questions = [
   {
      title: 'Commonly used data types DO NOT include:',
      choices: ['Strings', 'Booleans', 'Alerts', 'Numbers'],
      answer: 'Alerts',
   },
   {
      title: 'The condition in an if / else statement is enclosed within _____.',
      choices: ['Quotes', 'Curly brackets', 'Parentheses', 'Square brackets'],
      answer: 'Parentheses',
   },

   {
      title: 'Arrays in Javascript can be used to store _____.',
      choices: ['Numbers of strings', 'Other arrays', 'Booleans', 'All of the above'],
      answer: 'All of the above',
   },
   {
      title: 'String values must be enclosed within ____ when being assigned to variables.',
      choices: ['Commas', 'Curly brackets', 'Quotes', 'Parentheses'],
      answer: 'Quotes',
   },
   {
      title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: ['JavaScript', 'Terminal/Bash', 'For loops', 'Console.log'],
      answer: 'Console.log',
   },
];

var highScore = document.querySelector('#high-score');

var quizIntro = document.querySelector('#quiz-intro');
var beginBtn = document.querySelector('#begin-btn');

var questionScreen = document.querySelector('#question-screen');
var question = document.querySelector('#question');

var answerBtn = document.querySelectorAll('.answer-button');
var answerBtnOne = document.querySelector('#answer-btn1');
var answerBtnTwo = document.querySelector('#answer-btn2');
var answerBtnThree = document.querySelector('#answer-btn3');
var answerBtnFour = document.querySelector('#answer-btn4');
var check = document.querySelector('#check');

var finishScreen = document.querySelector('#finish-screen');
var finish = document.querySelector('#finish');
var finalScore = document.querySelector('#final-score');
var initials = document.querySelector('#initials');
var submitBtn = document.querySelector('#submit-btn');

var highScoreScreen = document.querySelector('#highscore-screen');
var record = document.querySelector('#record');
var backBtn = document.querySelector('#back-btn');
var submitBtn = document.querySelector('#clear-btn');

var timer = document.querySelector('#timer');
var timeLeft = 90;
var questionNumber = 0;
var questionCount = 1;
var total = 0;

function countdown() {
   var timeInterval = setInterval(function () {
      timeLeft--;
      timer.textContent = "Time left: " + timeLeft + " s";

      if (timeLeft <= 0) {
         clearInterval(timeInterval);
         timer.textContent = "Times up!";
         finish.textContent = "Times up!";
         gameOver();

      } else if (questionCount >= questions.length + 1) {
         clearInterval(timeInterval);
         gameOver();
      }
   }, 1000);
}

function beginQuiz() {
   quizIntro.style.display = "none"
   questionScreen.style.display = "block"
   questionNumber = 0
   countdown();
   displayQuestion(questionNumber)
}

beginBtn.addEventListener("click", beginQuiz);

function displayQuestion(n) {
   question.textContent = questions[n].title;
   answerBtnOne.textContent = questions[n].choices[0];
   answerBtnTwo.textContent = questions[n].choices[1];
   answerBtnThree.textContent = questions[n].choices[2];
   answerBtnFour.textContent = questions[n].choices[3];
   questionNumber = n;
}

function checkAnswer(event) {
   event.preventDefault();
   check.style.display = "block";
   setTimeout(function () {
      check.style.display = "none";
   }, 1000);

   if (questions[questionNumber].answer == event.target.value) {
      check.textContent = "Correct!";
      total = total + 10;

   } else {
      timeLeft = timeLeft - 10;
      check.textContent = "Wrong!"
   }

   if (questionNumber < questions.length - 1) {
      displayQuestion(questionNumber + 1);
   } else {
      gameOver();
   }
   questionCount++;
}

answerBtn.forEach(function (click) {
   click.addEventListener("click", checkAnswer);
});

function gameOver() {
   questionScreen.style.display = "none";
   finishScreen.style.display = "block";
   finalScore.textContent = "Your final score is " + total + ".";
   timer.style.display = "none";
}

