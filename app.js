// /*Note to self, Fix all spelling errors!*/
// /* userName */
//
// var userName = prompt('Let\'s get to know each other! What\'s your name?');
// console.log('userName = ' + userName);
// alert('Nice to meet\'cha ' + userName + '! Before you dig into my webpage, let\'s play a quick guessing game, shall we?');
//
// /* QuestionOne */
//
// var questionOne = prompt('Do you think I love animals?').toUpperCase();
// console.log('questionOne = ' + questionOne);
// if(questionOne === 'Y' || questionOne === 'YES') {
//   console.log('Q1 if');
//   alert('You got it ' + userName + '! I take care of several diffrent animals at home!');
// } else {
//   console.log('Q2 else');
//   alert('Turns out, I love just about every animal on this planet. Even spiders, spiders are cool just so long as they aren\'t on me');
// }
//
// /* QuestionTwo */
//
// var questionTwo = prompt('Do you think I like bungie jumping?').toUpperCase();
// console.log('questionTwo = ' + questionTwo);
// if(questionTwo === 'N' || questionTwo === 'NO') {
//   console.log('Q2 if');
//   alert('You\'re right, I have acrophobia\(fear of heights\)!');
// } else {
//   console.log('Q2 else');
//   alert('Well, ' + userName + ' as you get to know me, you\'ll start to understand that my fear of hieghts prevents me from even considering crazy things like bungie jumping.');
// }
//
// /* QuestionThree */
//
// var questionThree = prompt('Is there a better video game than "Zelda: Ocarina of Time?"').toUpperCase();
// console.log('questionThree = ' + questionThree);
// if (questionThree === 'N' || questionThree === 'NO') {
//   console.log('Q3 if');
//   alert('Glad to see we agree. Just thinking about that game, makes me want to play it.');
// }else{
//   console.log('Q3 else');
//   alert('While you\'re allowed to have an opnion, I don\'t agree with it ' + userName + '!' );
// }
//
// /* QuestionFour */
//
// var questionFour = prompt('Is pie better than cake?').toUpperCase();
// console.log('questionFour = ' + questionFour);
// if (questionFour === 'Y' || questionFour === 'YES'){
//   console.log('Q4 if');
//   alert('I think we can be friends! After all, pie is the holy grail of desserts');
// }else{
//   console.log('Q4 else');
//   alert('Oh, No. You\'re very wrong. Very wrong indeed. Nothing beats pie, cake is a lie!');
// }
//
// /* QuestionFive */
//
// var questionFive = prompt('What sea animals do you think I fear?').toUpperCase();
// console.log('questionFive = ' + questionFive);
// if(questionFive === 'DOLPHINS' || questionFive === 'WHALES' || questionFive === 'PORPOISES' || questionFive === 'SNAKES' || questionFive === 'LION FISHS'){
//   console.log ('Q5 if');
//   alert('You\'re right. Those things freak me out!');
// } else if (questionFive === 'SHARKS'){
//   console.log ('Q5 if else');
//   alert('Sharks are so misunderstood! I really want to spread awareness, sharks don\'t want to harm people. Most shark attacks are a case of mistaken identity');
// } else {
//   console.log('Q5 else');
//   alert('There are a lot of creatures in the sea. Most don\'t scare me at all... Of course, I could be forgetting something horrible');
// }
//
// /* QuestionSix */
//
// var jeffTopAnimals = ['dogs','cats','otters','octopus','hedghogs'];
// var questionSix = prompt('What is one of my top five favorit animals?').toLowerCase();
// console.log('questionSix = ' + questionSix);
// if (jeffTopAnimals.indexOf(questionSix) === -1) {
//   console.log('Q6 if');
//   alert('I probably do love ' + questionSix + ', but it\'s not one of my top five animals.');
// } else {
//   console.log('Q6 else');
//   var answerToSix = jeffTopAnimals.indexOf(questionSix);
//   console.log ('answerToSix = ' + answerToSix);
//   alert('Great guess, ' + jeffTopAnimals[answerToSix] + ' is in my top five!' );
// }
//
// /* QuestionSeven */
//
// var guessCounter = 0;
// var questionSeven = parseInt(prompt('My dog Callie at home is getting pretty old for a cocker spaniel. Can you guess how old she is?'));
// console.log('questionSeven = ' + questionSeven);
// while(questionSeven !== 17 && guessCounter < 6){
//   if (isNaN(questionSeven)){
//     console.log('Q7 if');
//     questionSeven = parseInt(prompt('Please use numbers 0-9'));
//     guessCounter ++;
//   }else if (questionSeven < 17 ) {
//     console.log('Q7 if else (Younger)');
//     questionSeven = parseInt(prompt('Older than that, she\'s older than most highschoolers!'));
//     guessCounter ++;
//   }else if (questionSeven > 17 ) {
//     console.log('Q7 if else (Older)');
//     questionSeven = parseInt(prompt('I really hope she lives that long, but she isn\'t there yet.'));
//     guessCounter ++;
//   }else if (guessCounter = 5){
//     console.log('Q7 if else (Counter < 5)');
//     alert('Looks like the struggle is real, Callie is 17!');
//   }
// }
// alert('17 is pretty old for a puppy don\'t you think?');
//
// /* So I'm not sure how to get the code to end with an alert letting the user know they ran out of guess. I thought having an else if statment that only looked at the var guesCounter I could end it that way
// I think I need to make a new if / else statment outside the while statement. something like:
// if(questionSeven !== 17 && guessCounter = 6 ){
// alert('Looks like the struggle is real, Callie is 17')
// }else{
// alert('Great Guess! 17 is pretty old for a puppy don\'t you think?')
// }
// but when I couldn't figure out how to get it to work...
// */
//
// /* QuestionEight */
//
// var jeffOlympics = ['swimming','table tennis','ping pong','bicycling'];
// var questionEight = prompt('Since I\'m making you guess things, what\'s one of my top three favorite (summer)olympic sports?').toLowerCase();
// console.log('questionEight = ' + questionEight);
// var isTrue = false;
//
// for (var i = 0; i < jeffOlympics.length; i++){
//   if (questionEight === jeffOlympics[i]){
//     console.log('Q8 if');
//     isTrue = true;
//   }
// }
// if (isTrue) {
//   alert('Great Job! swimming, table tennis(ping pong), and bicycling are the only sports I bother to watch in the summer olympics.');
// } else {
//   console.log('Q8 else');
//   alert('Sorry, but ' + questionEight + ' is not of the olympic games I watch, try again.');
// }
// alert('Welp, thats all ' + userName + ', thanks for playing! I hope you leanred something aobut me.');
// console.log('Full javascript was sucessfull');
//
//
// /*don't forget pseduo code/console.log()
//
// questionSeven
// My dog\(cocker spaniel\) at home is getting pretty old, How old would you guess she is?
//    A: 17 (Pretty old for a puppy don't you think?)
//    A: <17 (Older than that, she's older than most highschoolers!)
//    A: >17 (I really hope she lives that long, but she isn\'t there yet.)
//
// question 8
// Since I\'m making you guess things, what\'s one of my top three favorite (summer)olympic sports?
//   A = [swimming, table tennis, bicycling] (Great Job! swimming table tennis and bicycling are the only sports I bother to watch in the summer olympics.)
// */
