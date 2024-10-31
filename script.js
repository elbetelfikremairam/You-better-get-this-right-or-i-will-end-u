const quizData=[ {

question:"When did we meet?",
a:"september 4th",
b: "october 11th",
c:"september 27th",
d: "none",
correct :"c",
},

{ question:"When's my birthday?",
    a:"July 1st",
    b:"February 28th",
    c:"january 3rd",
    d:"august 1st",
    correct:"b",
},

    {
        question: "How many sibilings i got?",
        a: "1",
        b: "3",
        c: "zero. You lonely.",
        d: "2",
        correct: "d",
    },
    {
        question: "What do i like most about you?",
        a: "my face obviously.",
        b: "My cash cuz u a golddigger.",
        c: "My calming spirit and stability.",
        d: "Nothing. You actually hate me.",
        correct: "c",
    },
    {
        question: "Whats my favourite genre of movie?",
        a: "Comedy cuz you have no taste.",
        b: "Horror, you spooky byach.",
        c: "Romance to fill that void, mtsm.",
        d: "fantasy. because u can't handle reality.",
        correct: "b",
    },
    {
        question: "What was the name of the female lead in the Ethiopian skit we made?",
        a: "sara",
        b: "koki",
        c: "askalech",
        d: "merry",
        correct: "b",
    },

   {
    question: "How many kids do i want?",
    a: "2",
    b: "5",
    c: "1",
    d: "You don't lke kids.",
    correct: "d",
},
{
question: "What was the name of the female lead in the Ethiopian skit we made?",
a: "sara",
b: "koki",
c: "askalech",
d: "merry",
correct: "b",
},
{
question: "What was the name of the female lead in the Ethiopian skit we made?",
a: "sara",
b: "koki",
c: "askalech",
d: "merry",
correct: "b",
},
{
question: "What was the name of the female lead in the Ethiopian skit we made?",
a: "sara",
b: "koki",
c: "askalech",
d: "merry",
correct: "b",
},
]
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            let message = '';
            if (score <=2) {
                message = "Unacceptable,Jed.";
            } else if (score>2){
                message = ":) Good job. Dm me to get reward.";
            }

            quiz.innerHTML = `
                <h2>${message}. You got ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>`
            ;
        }
    }
});
