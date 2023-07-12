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
var checkLine = document.querySelector('#check');

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

