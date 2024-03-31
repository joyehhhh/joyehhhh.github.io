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

let quez = document.querySelector("#quen");
let opt1 = document.querySelector("#opt1");
let opt2 = document.querySelector("#opt2");
let opt3 = document.querySelector("#opt3");
let btn = document.querySelector("button");
let getoptions = document.querySelectorAll("input");
let indx = 0;
let score = 0;

next();

function next() {
  for (let i = 0; i < getoptions.length; i++) {
    if (getoptions[i].checked) {
      let seleopval = getoptions[i].value;
      let selctques = quiz[indx - 1].question;
      let selectopt = quiz[indx - 1][`opt${seleopval}`];
      let correctopt = quiz[indx - 1].cpt;

      if (selectopt == correctopt) {
        score++;
      }
    }
    getoptions[i].checked = false;
  }

  if (indx >= quiz.length) {
    alert(`your score is ${score}/${quiz.length}`);
    score = 0;
    indx = 0;
    next();
  } else {
    quez.innerText = quiz[indx].question;
    opt1.innerText = quiz[indx].opt1;
    opt2.innerText = quiz[indx].opt2;
    opt3.innerText = quiz[indx].opt3;
    indx++;
  }
}

function cl() {
  btn.disabled = false; //button enable
}
