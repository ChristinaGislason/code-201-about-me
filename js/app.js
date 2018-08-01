'use strict';

var question1 = 'Are churros Christina\'s favorite nostalgic food indulgence?';
var question1Response = prompt(question1);
  
console.log('Question 1: Question on food');
function answer1() {
  console.log(question1Response);
  if (question1Response === null) {
    return;
  }
  if (question1Response.toLowerCase() === 'yes') {
    alert(
      'Correct, she was born in Buenos Aires, Argentina and ate a bajillion of them!'
    );
  } else {
    alert('Awww, incorrect! This is in fact true-- Churros are amazing!!');
  }
}

answer1();

var question2 = prompt(
  'Does Christina think her superhero name would be Telepathina?'
);
console.log('Question 2: Question about superhero name');
function answer2() {
  if (question2 === 'yes') {
    alert('HECKS YES! You\'re right.');
  } else {
    alert('Awww wrong answer! She IS Telepathina.');
  }
}

answer2();

// var question3 = prompt(
//   'Did Christina move to Seattle because of Anthony Bourdain?'
// );
// console.log('Question 3: Question on moving to Seattle');
// function answer3() {
//   if (question3 === 'yes') {
//     alert(
//       'You got it right! She almost settled in upstate NY, but then watched the Seattle episode of \'The Layover\' and a month later moved there.'
//     );
//   } else {
//     alert(
//       'That\'s incorrect. She almost settled in upstate NY, but then watched the Seattle episode of \'The Layover\' and a month later moved there!'
//     );
//   }
// }

// answer3();

// var question4 = prompt('Was Christina ever bitten by an ostrich?');
// console.log('Question 4: Question about ostrich bite');
// function answer4() {
//   if (answer4 === 'yes') {
//     alert(
//       'YES, you\'re right. It was just too tempting not to stick her finger into the fence that contained the Ostriches at Marineland.'
//     );
//   } else {
//     alert(
//       'That\'s incorrect. She was in fact bitten! It was mostly a stupid mistake.'
//     );
//   }
// }

// answer4();

// var question5 = prompt(
//   'Did Christina perform on a European tour when she was a child?'
// );
// console.log('Question 5: Question about Europe tour');
// function answer5() {
//   if (answer5 === 'yes') {
//     alert(
//       'Nope, sorry! However, she did play cello when she was a teenager and tour with her orchestra!'
//     );
//   } else {
//     alert(
//       'You\'re right! It was when she was a teenager that she toured Europe with her orchestra.'
//     );
//   }
// }

// answer5();
