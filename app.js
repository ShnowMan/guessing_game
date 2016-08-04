/*Note to self, Fix all spelling errors!*/

/* userName */

var userName = prompt('Let\'s get to know each other! What\'s your name?');
console.log('userName = ' + userName);
alert('Nice to meet\'cha ' + userName + '! Before you dig into my webpage, let\'s play a quick guessing game, shall we?');
var answerCorrect = 0;

/* QuestionOne */
function questionOne(){
  var answerOne = prompt('Do you think I love animals?').toUpperCase();
  console.log('answerOne = ' + answerOne);
  if(answerOne === 'Y' || answerOne === 'YES') {
    console.log('Q1 if');
    alert('You got it ' + userName + '! I take care of several diffrent animals at home!');
    answerCorrect ++;
  } else {
    console.log('Q2 else');
    alert('Turns out, I love just about every animal on this planet. Even spiders, spiders are cool just so long as they aren\'t on me');
  }
}
questionOne();

/* QuestionTwo */
function questionTwo() {
  var answerTwo = prompt('Do you think I like bungie jumping?').toUpperCase();
  console.log('answerTwo = ' + answerTwo);
  if(answerTwo === 'N' || answerTwo === 'NO') {
    console.log('Q2 if');
    alert('You\'re right, I have acrophobia\(fear of heights\)!');
    answerCorrect ++;
  } else {
    console.log('Q2 else');
    alert('Well, ' + userName + ' as you get to know me, you\'ll start to understand that my fear of hieghts prevents me from even considering crazy things like bungie jumping.');
  }
}
questionTwo();

// /* QuestionThree */
function questionThree() {
  var answerThree = prompt('Is there a better video game than "Zelda: Ocarina of Time?"').toUpperCase();
  console.log('answerThree = ' + answerThree);
  if (answerThree === 'N' || answerThree === 'NO') {
    console.log('Q3 if');
    alert('Glad to see we agree. Just thinking about that game, makes me want to play it.');
    answerCorrect ++;
  }else{
    console.log('Q3 else');
    alert('While you\'re allowed to have an opnion, I don\'t agree with it ' + userName + '!' );
  }
}
questionThree();

// /* QuestionFour */
function questionFour() {
  var answerFour = prompt('Is pie better than cake?').toUpperCase();
  console.log('answerFour = ' + answerFour);
  if (answerFour === 'Y' || answerFour === 'YES'){
    console.log('Q4 if');
    alert('I think we can be friends! After all, pie is the holy grail of desserts');
    answerCorrect ++;
  }else{
    console.log('Q4 else');
    alert('Oh, No. You\'re very wrong. Very wrong indeed. Nothing beats pie, cake is a lie!');
  }
}
questionFour();

// /* QuestionFive */
function questionFive() {
  var aanswerFive = prompt('What sea animals do you think I fear?').toUpperCase();
  console.log('aanswerFive = ' + aanswerFive);
  if(aanswerFive === 'DOLPHINS' || aanswerFive === 'WHALES' || aanswerFive === 'PORPOISES' || aanswerFive === 'SNAKES' || aanswerFive === 'LION FISHS' || aanswerFive === 'JELLYFISH'){
    console.log ('Q5 if');
    alert('You\'re right. Those things freak me out!');
    answerCorrect ++;
  } else if (aanswerFive === 'SHARKS'){
    console.log ('Q5 if else');
    alert('Sharks are so misunderstood! I really want to spread awareness, sharks don\'t want to harm people. Most shark attacks are a case of mistaken identity');
  } else {
    console.log('Q5 else');
    alert('There are a lot of creatures in the sea. Most don\'t scare me at all... Of course, I could be forgetting something horrible');
  }
}
questionFive();

// /* QuestionSix */
function questionSix() {
  var jeffTopAnimals = ['dogs','cats','otters','octopus','hedghogs'];
  var answerSix = prompt('What is one of my top five favorit animals?').toLowerCase();
  console.log('answerSix = ' + answerSix);
  if (jeffTopAnimals.indexOf(answerSix) === -1) {
    console.log('Q6 if');
    alert('I probably do love ' + answerSix + ', but it\'s not one of my top five animals.');
  } else {
    console.log('Q6 else');
    var answerToSix = jeffTopAnimals.indexOf(answerSix);
    console.log ('answerToSix = ' + answerToSix);
    alert('Great guess, ' + jeffTopAnimals[answerToSix] + ' is in my top five!' );
    answerCorrect ++;
  }
}
questionSix();

// /* QuestionSeven */
function questionSeven(){
  var guessCounter = 0;
  var answerSeven = parseInt(prompt('My dog Callie at home is getting pretty old for a cocker spaniel. Can you guess how old she is?'));
  console.log('answerSeven = ' + answerSeven);
  while(answerSeven !== 17 && guessCounter < 6){
    if (isNaN(answerSeven)){
      console.log('Q7 if');
      answerSeven = parseInt(prompt('Please use numbers 0-9'));
      guessCounter ++;
    }else if (answerSeven < 17 ) {
      console.log('Q7 if else (Younger)');
      answerSeven = parseInt(prompt('Older than that, she\'s older than most highschoolers!'));
      guessCounter ++;
    }else if (answerSeven > 17 ) {
      console.log('Q7 if else (Older)');
      answerSeven = parseInt(prompt('I really hope she lives that long, but she isn\'t there yet.'));
      guessCounter ++;
    }
  }
  if (answerSeven === 17 && guessCounter <= 6){
    alert('17 is pretty old for a puppy don\'t you think?');
    answerCorrect ++;
  } else {
    alert('Looks like the struggle is real, Callie is 17!');
  }
}
questionSeven();

// /* QuestionEight */
function questionEight(){
  var jeffOlympics = ['swimming','table tennis','ping pong','bicycling'];
  var answerEight = prompt('Since I\'m making you guess things, what\'s one of my top three favorite (summer)olympic sports?').toLowerCase();
  console.log('answerEight = ' + answerEight);
  var isTrue = false;

  for (var i = 0; i < jeffOlympics.length; i++){
    if (answerEight === jeffOlympics[i]){
      console.log('Q8 if');
      isTrue = true;
      break;
    }
  }
  if (isTrue) {
    alert('Great Job! swimming, table tennis(ping pong), and bicycling are the only sports I bother to watch in the summer olympics.');
    answerCorrect ++;
  } else {
    console.log('Q8 else');
    alert('Sorry, but ' + answerEight + ' is not of the olympic games I watch.');
  }
}
questionEight();

/* Final Alert */

alert('Welp, thats all ' + userName + ', thanks for playing! I hope you leanred something aobut me. By the way you got ' + answerCorrect + ' answers right!');
console.log('Full javascript was sucessfull');


/*don't forget pseduo code/console.log() */
