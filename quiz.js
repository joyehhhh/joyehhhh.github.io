let quiz = [
  {
    question: "<P> tag use for",
    opt1: "paragraph",
    opt2: "bold",
    opt3: "none of these",
    cpt: "paragraph"
  },
  {
    question: "<I> tag use for",
    opt1: "bold",
    opt2: "italic",
    opt3: "underline",
    cpt: "italic"
  },
  {
    question: "<U> tag use for",
    opt1: "bold",
    opt2: "italic",
    opt3: "underline",
    cpt: "underline"
  },
  {
    question: "Html stand for",
    opt1: "hyper text make language",
    opt2: "hyper text markup language",
    opt3: "none of these",
    cpt: "hyper text markup language"
  },
  {
    question: "Css stand for",
    opt1: "case small sheet",
    opt2: "casecading style sheet",
    opt3: "none of these",
    cpt: "casecading style sheet"
  },
];

let questionElement = document.getElementById("question");
let opt1Element = document.getElementById("opt1");
let opt2Element = document.getElementById("opt2");
let opt3Element = document.getElementById("opt3");
let btnElement = document.querySelector("button");
let optionElements = document.querySelectorAll("input[type='radio']");
let questionIndex = 0;
let score = 0;

loadQuestion();

function loadQuestion() {
  clearOptions();

  let currentQuestion = quiz[questionIndex];
  questionElement.innerText = currentQuestion.question;
  opt1Element.innerText = currentQuestion.opt1;
  opt2Element.innerText = currentQuestion.opt2;
  opt3Element.innerText = currentQuestion.opt3;
}

function clearOptions() {
  optionElements.forEach(option => {
    option.checked = false;
  });
}

function checkAnswer() {
  btnElement.disabled = false; // Enable the Next button

  let selectedOption = Array.from(optionElements).find(option => option.checked);
  if (selectedOption) {
    let selectedAnswer = selectedOption.value;
    let correctAnswer = quiz[questionIndex].cpt;

    if (selectedAnswer === correctAnswer) {
      score++;
    }
  }
}

function nextQuestion() {
  questionIndex++;
  if (questionIndex >= quiz.length) {
    showScore();
    score = 0;
    questionIndex = 0;
  } else {
    loadQuestion();
  }
}

function showScore() {
  alert(`Your score is ${score}/${quiz.length}`);
}
