'use strict'; // highlights any mistakes made with variables

var userScore = 0;
var firstMessage = 'Welcome! Please enter your name:';
var userName = prompt(firstMessage);
//logic arrays
var questionsArray = [
  'Are churros Christina\'s favorite nostalgic food indulgence? Type \'yes\' or \'no\'',
  'Does Christina think her superhero name would be Telepathina? Type \'yes\' or \'no\'',
  'Did Christina move to Seattle because of Anthony Bourdain? Type \'yes\' or \'no\'',
  'Was Christina ever bitten by an ostrich? Type \'yes\' or \'no\'',
  'Did Christina perform on a European tour when she was a child? Type \'yes\' or \'no\''
];
var answersArray = ['yes','yes', 'yes', 'yes', 'no'];
var answersCharArray = ['y', 'y', 'y', 'y', 'n'];
var correctMessageArray = [
  'Correct, she was born in Buenos Aires, Argentina where they are a sweet treat. She ate a bajillion of them!',
  'HECKS YES! You\'re right.',
  'You got it right! She almost settled in upstate NY, but then watched the Seattle episode of \'The Layover\' and a month later moved there.',
  'YES, you\'re right. It was just too tempting not to stick her finger into the fence that contained the ostriches at Marineland.',
  'Nope, sorry! However, she did play cello when she was a teenager and toured with her orchestra!'
];
var wrongMessageArray = [
  'Awww, incorrect! This is in fact true-- Churros are amazing!!',
  'Awww wrong answer! She IS Telepathina.',
  'That\'s incorrect. She almost settled in upstate NY, but then watched the Seattle episode of \'The Layover\' and a month later moved there!',
  'That\'s incorrect. She was in fact bitten! It was mostly a stupid mistake.',
  'Nope, sorry! However, she did play cello when she was a teenager and toured with her orchestra!'
];

function askUserQuestions() {
  for(var i = 0; i < 5; i++) {
    var userAnswer = prompt(questionsArray[i]).toLowerCase();
    if (userAnswer === answersArray[i] || userAnswer === answersCharArray[i]) {
      alert(correctMessageArray[i]);
      userScore++;
    } else if (userAnswer === '') {
      alert('invalid input');
    }else {
      alert(wrongMessageArray[i]);
    }
  }
}

askUserQuestions();


//Question 6 about guessing number game
//Guessing game prompt with console log
//User gets 4 attempts to guess number correctly with countdown to remaining attempts

function askUserNumbers (){
  var question6 =
  'How many times do you think Christina has moved in the past 5 years (enter a number between 0 to 10):';
  console.log('Question 6: Number guessing game');
  var correctAnswer = 6;

  for (var i = 1; i < 5; i++) {
    var question6Response = parseInt(prompt(question6));
    if (question6Response === correctAnswer) {
      alert(
        'Great guess! She\'s TIRED of moving and deciding to settle down for awhile!'
      );
      userScore += 1;
      break; //exit from loop
    } else if (question6Response > correctAnswer && question6Response <= 10) {
      alert('Your guess was too high, you get ' + (4 - i) + ' more attempts.');
    } else if (question6Response < correctAnswer && question6Response >= 0) {
      alert('Your guess was too low, you get ' + (4 - i) + ' more attempts.');
    } else {
      alert('Invalid entry, please input a number between 0 to 10.');
    }
  }
}


//Question 7 about guessing game-- countries visited
//Guessing game is prompted and logged on console

function askUserCountry () {
  var question7 =
    'Try to guess some countries that Christina has visited (You get 6 attempts!)';
  console.log('Question 7: Countries visited guessing game');
  var countryName = [
    'argentina',
    'bahamas',
    'belgium',
    'cuba',
    'france',
    'germany',
    'iceland',
    'indonesia',
    'netherlands',
    'malaysia',
    'mexico',
    'philippines',
    'singapore',
    'south Korea',
    'thailand',
    'uruguay'
  ];

  for (var j = 0; j < 6; j++) {
    var question7Response = prompt(question7).toLowerCase();
    if (countryName.includes(question7Response) === true) {
      alert(
        'Great guess! She\'s been to ' +
            countryName.length +
            ' countries. The countries are: ' +
            countryName.toString()
      );
      userScore++;
      break;
    } else if (question7Response === '') {
      alert('Invalid input');
    } else {
      alert(
        question7Response +
            ' is incorrect. Try again! You get ' +
            (5 - j) +
            ' more attempts to guess.'
      );
    }
  }
}

askUserCountry();


//keep tally on total number of correct answers
//prompt message that includes user name and correct number of answers

var scoreMessage = userName + ' , you answered ' + userScore + ' of the questions correctly!';
prompt(scoreMessage);




