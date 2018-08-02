'use strict'; // highlights any mistakes made with variables

var userScore = 0;
var firstMessage = 'Welcome! Please enter your name:';
var userName = prompt(firstMessage);

//Question 1 on food
var question1 =
  'Are churros Christina\'s favorite nostalgic food indulgence? Type \'yes\' or \'no\'';
var question1Response = prompt(question1);
console.log('Question 1: Question on food');
function answer1() {
  if (question1Response === null) {
    return;
  }
  userScore += 1;
  if (question1Response.toLowerCase() === 'yes') {
    alert(
      'Correct, she was born in Buenos Aires, Argentina where they are a sweet treat. She ate a bajillion of them!'
    );
    userScore = userScore + 1; 
  } else {
    alert('Awww, incorrect! This is in fact true-- Churros are amazing!!');
  }
}

answer1();

//Question 2 about superhero name
var question2 =
  'Does Christina think her superhero name would be Telepathina? Type \'yes\' or \'no\'';
var question2Response = prompt(question2);
console.log('Question 2: Question about superhero name');

function answer2() {
  if (question2Response === null) {
    return;
  }
  if (question2Response.toLowerCase() === 'yes') {
    alert('HECKS YES! You\'re right.');
    userScore += 1;
  } else {
    alert('Awww wrong answer! She IS Telepathina.');
  }
}

answer2();

//Question 3 about moving to Seattle
var question3 =
  'Did Christina move to Seattle because of Anthony Bourdain? Type \'yes\' or \'no\'';
var question3Response = prompt(question3);

console.log('Question 3: Question on moving to Seattle');
function answer3() {
  if (question3Response === null) {
    return;
  }
  if (question3Response.toLowerCase() === 'yes') {
    alert(
      'You got it right! She almost settled in upstate NY, but then watched the Seattle episode of \'The Layover\' and a month later moved there.'
    );
    userScore += 1;
  } else {
    alert(
      'That\'s incorrect. She almost settled in upstate NY, but then watched the Seattle episode of \'The Layover\' and a month later moved there!'
    );
  }
}

answer3();

//Question 4 about ostrich bite
var question4 = 'Was Christina ever bitten by an ostrich? Type \'yes\' or \'no\'';
var question4Response = prompt(question4);
console.log('Question 4: Question about ostrich bite');
function answer4() {
  if (question4Response === null) {
    return;
  }
  if (question4Response.toLowerCase() === 'yes') {
    alert(
      'YES, you\'re right. It was just too tempting not to stick her finger into the fence that contained the ostriches at Marineland.'
    );
    userScore += 1;
  } else {
    alert(
      'That\'s incorrect. She was in fact bitten! It was mostly a stupid mistake.'
    );
  }
}

answer4();

//Question 5 about European tour
var question5 =
  'Did Christina perform on a European tour when she was a child? Type \'yes\' or \'no\'';
var question5Response = prompt(question5);
console.log('Question 5: Question about Europe tour');
function answer5() {
  if (question5Response === null) {
    return;
  }
  if (question5Response.toLowerCase() === 'yes') {
    alert(
      'Nope, sorry! However, she did play cello when she was a teenager and toured with her orchestra!'
    );
    userScore += 1;
  } else {
    alert(
      'You\'re right! It was when she was a teenager that she toured Europe with her orchestra.'
    );
  }
}

answer5();

//Question 6 about guessing number game
//Guessing game prompt with console log
var question6 =
  'How many times do you think Christina has moved in the past 5 years (enter a number between 0 to 10):';
console.log('Question 6: Number guessing game');

//User gets 4 attempts to guess number correctly with countdown to remaining attempts
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

//Question 7 about guessing game-- countries visited
//Guessing game is prompted and logged on console

var question7 =
  'Try to guess some countries that Christina has visited (You get 6 attempts!)';
console.log('Question 7: Countries visited guessing game');
var question7Response = prompt(question7);
var countryName = [
  'Argentina',
  'Bahamas',
  'Belgium',
  'Cuba',
  'France',
  'Germany',
  'Iceland',
  'Indonesia',
  'Netherlands',
  'Malaysia',
  'Mexico',
  'Philippines',
  'Singapore',
  'South Korea',
  'Thailand',
  'Uruguay'
];

// 1. see if the response matches any of the above countries in countryName array
// 2. if response matches countyName, then alert success
// 3. if response incorrect, then attempt again (total 6 attempts). Repeat back to step 1 ie. loop
// 4. Alert game over. List out countries.
var correctAnswer = false;

for (var j = 0; j < 6; j++) {
  for (var k = 0; k <= countryName.length; k++) {
    if (question7Response === countryName[k]) {
      alert(
        'Great guess! She\'s been to ' +
          countryName.length +
          ' countries. The countries are: ' +
          countryName.toString()
      );
      userScore += 1;
      correctAnswer = true;
      break;
    }
  }
  //if won, then break
  if (correctAnswer) {
    break;
  }

  alert(
    question7Response +
      ' is incorrect. Try again! You get ' +
      (5 - j) +
      ' more attempts to guess.'
  );
}

//keep tally on total number of correct answers
//prompt message that includes user name and correct number of answers

var scoreMessage = userName + ' , you answered ' + userScore + ' of the questions correctly!' 
prompt(scoreMessage);




