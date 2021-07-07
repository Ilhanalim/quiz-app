const quizData = [
    {
        question: 'How old am I?',
        a: '15',
        b: '17',
        c: '18',
        d: '20',
        answer: 'c'
    }, {
        question: 'Favourite Anime?',
        a: 'Death Note',
        b: 'Sword Art Online',
        c: 'Gintama',
        d: 'Kimi no Nawa',
        answer: 'a'
    }, {
        question: 'Favourite Band?',
        a: 'Nirvana',
        b: 'AC/DC',
        c: 'Red Hot Chili Peppers',
        d: 'Guns n Roses',
        answer: 'c'
    }, {
        question: 'How to read "恋愛映画"?',
        a: 'れんあうえいが',
        b: 'れんあうえいか',
        c: 'れんあいえいか',
        d: 'れんあいえいが',
        answer: 'd'
    }, {
        question: '1 + 1 x 0?',
        a: '0',
        b: '1',
        c: '2',
        d: '3',
        answer: 'b'
    }, {
        question: 'Favourite yorushika song?',
        a: '言って',
        b: 'ただ君に晴れ',
        c: 'パレード',
        d: '風を食む',
        answer: 'd'
    }
]

const noQuestion = document.getElementById('noques');
const question = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const btnSubmit = document.getElementById('btnSubmit');
const btnTry = document.querySelector('.btn-try');
const gameOver = document.querySelector('.gameover');
const ansBody = document.querySelector('.answer-body');
const ans = document.querySelectorAll('.answer');

var currentQuizData = 0;
var noQues = 1;
var score = 0;
var isChecked = true;

loadQuiz();

function loadQuiz() {
    let currentQuiz = quizData[currentQuizData];
    // show data to html
    noQuestion.innerText = noQues;
    question.innerText = currentQuiz.question;
    a_text.innerText = currentQuiz.a;
    b_text.innerText = currentQuiz.b;
    c_text.innerText = currentQuiz.c;
    d_text.innerText = currentQuiz.d;
    
}

function getAnswer() {
    let currentQuiz = quizData[currentQuizData];
    for (let e of ans) {
        if (e.checked) {
            if (e.id === currentQuiz.answer) {
                // increasing score if correct
                score++;
            }
            e.checked = false;
            isChecked = true;
            break;
        } else {
            isChecked = false;
        }
    }
}

btnSubmit.addEventListener('click', () => {
    console.log(currentQuizData);
    getAnswer();
    if (isChecked) {
        if (currentQuizData < (quizData.length - 1)) {
            currentQuizData++;
            noQues++;
            loadQuiz(); 
        } else {
            btnSubmit.innerText = 'Try Again';
            gameOver.classList.add('font-weight-bold');
            gameOver.innerText = 'Game Over !';
            question.innerText = '';
            ansBody.innerHTML = `<div class="mt-5 mr-5 pb-3 text-center">
                                    <h5>Total Score</h5>
                                    <h6>${score} / ${quizData.length}</h6>
                                </div>`;
            btnSubmit.addEventListener('click', () => {
                location.reload();
            });
        }
    }         
});
