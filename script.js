const quizData = [
    {
        question: 'How old is javascript',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },{
        question: 'What is the most used progamming language in 2020',
        a: 'java',
        b: 'c',
        c: 'javacript',
        d: 'python',
        correct: 'c',
    },{
        question: 'Who is the President of US',
        a: 'Barrack Obama',
        b: 'Donal Trump' ,
        c: 'Ivan Salvado',
        d: 'Hilary Cliton',
        correct: 'b',
    },{
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Highly made language',
        c: 'Jason Object Notation',
        d: 'Application programming Interface',
        correct: 'a',
    },{
        question: 'What year was Javascript Lauch',
        a: '1995',
        b: '2019',
        c: '2005',
        d: 'none of the above',
        correct: 'a'
    }
];
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers(); 
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
    
}

function getSelected(){
    const answerEls = document.querySelectorAll(".answer");
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            return answer = answerEl.id;
        }
    });

    return answer
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submitBtn.addEventListener("click",() =>{
const answer = getSelected();

if(answer){
    if(answer === quizData[currentQuiz].correct){
     score++;
    }
    currentQuiz++;
    if(currentQuiz < quizData.length){
        loadQuiz();
    }
    else{
        //todo show results
        quiz.innerHTML = `<h2> You answered correctly
        at ${score}/${quizData.length} qestions.</h2> <button onclick="location.reload()">Reload</button>`;
    }
  }

});