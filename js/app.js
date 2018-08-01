'use strict';

//Question 1 on food
var question1 =
  'Are churros Christina\'s favorite nostalgic food indulgence? Type \'yes\' or \'no\'';
var question1Response = prompt(question1);
console.log('Question 1: Question on food');
function answer1() {
  if (question1Response === null) {
    return;
  }

  if (question1Response.toLowerCase() === 'yes') {
    alert(
      'Correct, she was born in Buenos Aires, Argentina where they are a sweet treat. She ate a bajillion of them!'
    );
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
      'YES, you\'re right. It was just too tempting not to stick her finger into the fence that contained the Ostriches at Marineland.'
    );
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
  } else {
    alert(
      'You\'re right! It was when she was a teenager that she toured Europe with her orchestra.'
    );
  }
}

answer5();
