const questions = [
    {
        question: "What does HTML stand for ?",
        answers: [
            {text: "a. HyperText Markdown Language", correct: false},
            {text: "b. HyperText Markup Language", correct: true},
            {text: "c. Hyperloop Machine Language", correct: false},
            {text: "d. Helicopter Terminals Motorboater Lamborginis", correct: false},
        ]
    },
    {
        question: "What does CSS stand for ?",
        answers: [
            {text: "a. Cascading Style Sheets", correct: true},
            {text: "b. Central Style Sheets", correct: false},
            {text: "c. Cascading Simple Sheets", correct: false},
            {text: "d. Cars SUVs Sailboats", correct: false},
        ]
    },
    {
        question: "In which year was JavaScript launched ?",
        answers: [
            {text: "a. 1996", correct: false},
            {text: "b. 1995", correct: true},
            {text: "c. 1994", correct: false},
            {text: "d. None of the above", correct: false},
        ]
    },
    {
        question: "JavaScript is used for ?",
        answers: [
            {text: "a. Backend", correct: false},
            {text: "b. Animation", correct: false},
            {text: "c. Dynamic updation content", correct: false},
            {text: "d. Frontend", correct: true},
        ]
    },
    {
        question: "Which Language runs in a web browser  ?",
        answers: [
            {text: "a. C++", correct: false},
            {text: "b. JavaScript", correct: true},
            {text: "c. Python", correct: false},
            {text: "d. Java", correct: false},
        ]
    }
];

const queNo = document.getElementById("qNo");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;
    queNo.innerHTML = +questionNo+" / 5";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.
    length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function  handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
};

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();