const qCa = [
  { question: "What is the base language for websites?",
  answers: {a: 'English', b: 'Latin', c: 'HTML', d: 'braile'},
  correctAnswer: 'HTML'
},
{ question: "Where should you store your work to allow for a group of people to work together on common initiative?",
  answers: {a: 'Twitter', b: 'the dark web', c: 'the cloud', d: 'Github'}, correctAnswer: 'Github'
},
{ question: "Who presented the Mother of All Demos?",
  answers: { a: 'Doug Engelbart', b: 'Elon Musk', c: 'Tim Berners-Lee', d: 'Steve Jobs'},
  correctAnswer: 'Doug Engelbart'
},
{ question: "On what browser was JavaScript first used?", 
  answers: { a: 'AOL', b:'Internet Explorer', c:'Netscape', d:'AskJeeves'},
  correctAnswer: 'Netscape'
},
{ question: "Who created CSS?", 
  answers: { a: 'Microsft', b:'W3C', c:'Google', d:'Sony'},
  correctAnswer: 'W3C'
},
{ question: "When was CSS first released?", 
  answers: { a: 'August, 1991', b:'December, 1996', c:'May, 1989', d: 'January, 1999'},
  correctAnswer: 'December, 1996'
}]
var startBtn = document.getElementById('startBtn');
var qBox = document.getElementById('questionBox');
// var aBox = document.querySelectorAll('#answerbox');
var submitBtn = document.getElementById('submit');
var question = document.getElementById('question');
var choices = document.getElementById('choices');
// var rightAnswer = document.getElementById('answer');
// var responseSelected = document.getElementsByName('options')
var timerBox = document.getElementById('timerBox');
let tally = document.getElementById('tally');
var sBox = document.getElementById('scoreBox');

var initialsBtn = document.getElementById('addInitials');
var iBox = document.getElementById('initials');

const timer = 30;

var score = 0;
var timeRemaining = timer;

const timerInterval = setInterval(function() {
timeRemaining--;
timerBox.innerHTML = `Seconds Remaining ${timeRemaining}`;
if(timeRemaining ===0) {
  clearInterval(timerInterval);
  endGame();
}
}, 1000)

let currentQuestion = 0;
const totalQuestions = qCa.length

function showQuestion() {
    const currentQ = qCa[currentQuestion];
console.log(currentQ.question)
  question.innerHTML = currentQ.question;
  choices.innerHTML = "";
  console.log("Fun in the clouds")
  const answerChoices = Object.keys(currentQ.answers);
  for (let i = 0; i < answerChoices.length; i++) {
    const answerChoice = answerChoices[i];
    const answerText = currentQ.answers[answerChoice];
    choices.innerHTML += 
    `<li>
    <input type="radio" name="answer" value="${answerText}">
     <label>${answerText}</label>
    </li>`;
  }
  submitBtn.style.display = "block";
}

function endGame() {
  qBox.style.display = "none";
  sBox.style.display = 'block'
  startBtn.style.display = 'block'
  tally.innerHTML = `${score}`;
  iBox.style.display = 'block';
}

startBtn.addEventListener("click", function() {
  startBtn.style.display = "none";
  sBox.style.display = "none";
  iBox.style.display = "none"
  qBox.style.display = 'block';
  score = 0;
  currentQuestion = 0;
  timeRemaining = 30;
  showQuestion();
});

submitBtn.addEventListener("click", function() {
  const answers = document.querySelectorAll('input[name="answer"]:checked');
  if (answers.length > 0) {
    const answerSelected = answers[0].value;
    const correctAnswer = qCa[currentQuestion].correctAnswer;
    if (answerSelected === correctAnswer) {
      score++;
    } else {
      timeRemaining -=5
    }
    console.log(score);
    currentQuestion++;
    if (currentQuestion < totalQuestions) {
      showQuestion();
    } else {
      endGame();
    }
  }
});

initialsBtn.addEventListener("click", function () {
  iBox.style.display = "none"
});

















