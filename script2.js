// qCa 
/* #region Main ---- qCa -- question answers correctAnswer */

var qCa = [
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

/* #endregion */

var qBox = document.querySelectorAll('#questionBox');
var aBox = document.querySelectorAll('#answerbox');
var submitBtn = document.getElementById('submit');
var rightAnswer = document.getElementById('answer');

var responseSelected = document.getElementsByName('options')

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