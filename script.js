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
var qBox = document.querySelector('#questionBox');
// var aBox = document.querySelectorAll('#answerbox');
var submitBtn = document.getElementById('submit');
var question = document.getElementById('question');
var choices = document.getElementById('choices');
// var rightAnswer = document.getElementById('answer');
var scoreEl = document.getElementById('scoreBox');
// var responseSelected = document.getElementsByName('options')

const timer = 30;

var score = 0;
var timeRemaining = timer;

let currentQuestion = 0;
const totalQuestions = qCa.length

function showQuestion() {
  console.log("Fun in the sun")
  const currentQ = qCa[currentQuestion];
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

startBtn.addEventListener("click", function() {
  startBtn.style.display = "none";
  qBox.classList.add("show");
  showQuestion();
});



















function getAnswer(){

// var responseSelected = document.getElementsByName('options')

for (var i =0; i < responseSelected.length; i++){
  if (responseSelected[i].checked && responseSelected[i].checked == rightAnswer.value){
  document.getElementById('result').innerHTML  
  = "Answered: "+responseSelected[i].value;
  // } if (responseSelected[i].checked && responseSelected[i].checked == rightAnswer.value){
  //   document.getElementById('result').innerHTML = "Wrong"
  // }
}

  // if (responseSelected[i].checked) 
  // document.getElementById('result').innerHTML
  //   = "Answered: "+responseSelected[i].value;
  // }
}
}

submitBtn.addEventListener('click', getAnswer);