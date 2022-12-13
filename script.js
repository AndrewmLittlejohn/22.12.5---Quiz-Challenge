
// Questions
/* #region Main */
var questions = [
{   question: "What is the base language for websites?",
  answers:['English', 'Latin', 'HTML', 'braile'],
  correctAnswer: 'HTML'
}, 
{ question: "Where should the <script> tag for your .js file go in your HTML document?",
  answers: ['In the head tag', 'At the top of the <body>', 'At the bottom of the <body>', 
   'JS should always be written in line'], correctAnswer: 'At the bottom of the <body>'
},
{ question: "Where should you store your work to allow for a group of people to work together on common initiative?",
  answers: ['Twitter', 'the dark web', 'the cloud', 'Github'], correctAnswer: 'Github'
},
{ question: "Who presented the Mother of All Demos?",
  answers: ['Doug Engelbart','Elon Musk', 'Tim Berners-Lee', 'Steve Jobs'],
  correctAnswer: 'Doug Engelbart'
},
{ question: "On what browser was JavaScript first used?", 
  answers: ['AOL', 'Internet Explorer', 'Netscape', 'AskJeeves'],
  correctAnswer: 'Netscape'
},
{ question: "Who created CSS?", 
  answers: ['Microsft', 'W3C', 'Google', 'Sony'],
  correctAnswer: 'W3C'
},
{ question: "When was CSS first released?", 
  answers: ['August, 1991', 'December, 1996', 'May, 1989', 'January, 1999'],
  correctAnswer: 'December, 1996'
},
]
/* #endregion */

var submitBtn = document.querySelector('.btn-primary');


 var output = [];
 
Array.prototype.value = function() {
  return this[Math.floor(Math.random()*this.length)];
}


submitBtn.addEventListener('click',function() {
  questions.value();
  console.log(questions.value);

});

















// resources

