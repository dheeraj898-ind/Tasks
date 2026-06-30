let questions = [
    {
        question: "Which keyword is used to declare a block-scoped variable in JavaScript?",
        options: ["var", "let", "define", "constvar"],
        answer: "let"
    },
    {
        question: "Which method is used to print data in the browser console?",
        options: ["console.print()", "console.log()", "print()", "log.console()"],
        answer: "console.log()"
    },
    {
        question: "Which event occurs when a button is clicked?",
        options: ["mouseover", "submit", "click", "load"],
        answer: "click"
    },
    {
        question: "What is the output type of prompt()?",
        options: ["Number", "Boolean", "String", "Array"],
        answer: "String"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["link", "href", "a", "url"],
        answer: "a"
    },
    {
        question: "Which tag is used to display an image?",
        options: ["picture", "img", "image", "src"],
        answer: "img"
    },
    {
        question: "Which HTML element is used to create a dropdown list?",
        options: ["input", "list", "select", "optionbox"],
        answer: "select"
    },
    {
        question: "Which CSS property is used to change text color?",
        options: ["font-color", "text-color", "color", "font-style"],
        answer: "color"
    },
    {
        question: "Which CSS property is used to make corners rounded?",
        options: ["corner-radius", "border-round", "border-radius", "radius"],
        answer: "border-radius"
    },
    {
        question: "Which CSS layout system is used for one-dimensional layouts?",
        options: ["Grid", "Flexbox", "Table", "Float"],
        answer: "Flexbox"
    }
];



let currentQuestion = 0;
let userAnswers =[];
let score = 0;

let welcomeScreen = document.getElementById("welcome-screen");
let quizScreen = document.getElementById("quiz-screen");
let resultScreen = document.getElementById("result-screen");

let startBtn = document.getElementById("start-btn");
let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");
let submitBtn = document.getElementById("submit-btn");
let restartBtn = document.getElementById("restart-btn");

let questionNumber = document.getElementById("question-number");
let question = document.getElementById("question");
let options = document.getElementById("options");

let scoreText = document.getElementById("score");
let correctText = document.getElementById("correct");
let wrongText = document.getElementById("wrong");
let percentageText = document.getElementById("percentage");
let messageText = document.getElementById("message");


startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
prevBtn.addEventListener("click", previousQuestion);
submitBtn.addEventListener("click", submitQuiz);
restartBtn.addEventListener("click", restartQuiz);


function startQuiz()
{
    welcomeScreen.style.display = "none";
    quizScreen.style.display = "block";

    loadQuestion();
}


function loadQuestion()
{
    questionNumber.innerText =
    "Question " + (currentQuestion + 1) + " of " + questions.length;

    question.innerText =
    questions[currentQuestion].question;

    options.innerHTML = "";

    for(let i = 0; i < questions[currentQuestion].options.length; i++)
    {
        let option = document.createElement("div");

        option.classList.add("option");

        option.innerText =
        questions[currentQuestion].options[i];

        if(userAnswers[currentQuestion] === option.innerText)
        {
            option.classList.add("selected");
        }

        option.addEventListener("click", function()
        {
            userAnswers[currentQuestion] =
            option.innerText;

            loadQuestion();
        });

        options.appendChild(option);
    }

    if(currentQuestion === 0)
    {
        prevBtn.disabled = true;
    }
    else
    {
        prevBtn.disabled = false;
    }

    if(currentQuestion === questions.length - 1)
    {
        nextBtn.style.display = "none";
        submitBtn.style.display = "inline-block";
    }
    else
    {
        nextBtn.style.display = "inline-block";
        submitBtn.style.display = "none";
    }
}


function nextQuestion()
{
    if(currentQuestion < questions.length )
    {
        currentQuestion++;

        loadQuestion();
    }
}


function previousQuestion()
{
    if(currentQuestion > 0)
    {
        currentQuestion--;

        loadQuestion();
    }
}


function submitQuiz()
{
    score = 0;

    for(let i = 0; i < questions.length; i++)
    {
        if(userAnswers[i] === questions[i].answer)
        {
            score++;
        }
    }

    let wrongAnswers =
    questions.length - score;

    let percentage =
    (score / questions.length) * 100;

    let message = "";

    if(percentage >= 90)
    {
        message = "Excellent!";
    }
    else if(percentage >= 75)
    {
        message = "Great Job!";
    }
    else if(percentage >= 50)
    {
        message = "Good Effort!";
    }
    else
    {
        message = "Keep Practicing!";
    }

    quizScreen.style.display = "none";
    resultScreen.style.display = "block";

    scoreText.innerText =
    "Score : " + score + "/" + questions.length;

    correctText.innerText =
    "Correct Answers : " + score;

    wrongText.innerText =
    "Wrong Answers : " + wrongAnswers;

    percentageText.innerText =
    "Percentage : " + percentage + "%";

    messageText.innerText =
    message;
}


function restartQuiz()
{
    currentQuestion = 0;

    score = 0;

    userAnswers = [];

    resultScreen.style.display = "none";

    welcomeScreen.style.display = "block";
}