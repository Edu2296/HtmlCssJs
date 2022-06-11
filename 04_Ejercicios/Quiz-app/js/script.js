const quizData=[
    {
        question: 'how old is florin',
        a: '10',
        b: '20',
        c: '30',
        d: '40',
        correct: 'c'
    },
    {question:'what is the most used programing lenguage in 2019',
        a:'java',
        b:'c++',
        c:'python',
        d:'javascript',
        correct: 'a'
},
    {question:'who is the president of us',  
        a:'florin poppins',
        b:'Donald Trump',
        c:'ivan sedano',
        d:'mihai andrei',
        correct: 'b'
}   ,
    {question:'what does html stand for',  
        a:'hypertext markup lenguage',
        b:'cascading style sheet',
        c:'jason object notation',
        d:'heliopter terminals motorboats lamborginis',
        correct: 'a'
    }
    ,
    {question:'what year was javascript launched',  
        a:'1996',
        b:'1995',
        c:'1994',
        d:'none of the above',
        correct: 'a'
    }

]
const questionEl= document.getElementById('question');
const a_text= document.getElementById('a_text');
const b_text= document.getElementById('b_text');
const c_text= document.getElementById('c_text');
const d_text= document.getElementById('d_text');
let currentQuestion = 0;

loadQuiz();

function loadQuiz(){
    const  currentQuizData = quizData[currentQuestion];
    questionEl.innerHTML=currentquizData.question;

    currentQuestion++;
}