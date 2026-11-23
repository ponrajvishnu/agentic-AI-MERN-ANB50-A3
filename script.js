const questions = [
    {
        question: "Which keyword declares a variable that cannot be reassigned?",
        options: ["var", "let", "const", "static"],
        ans: "const" 
    },
    {
        question: "What does typeof null return in JavaScript?",
        options: ["null", "object", "undefined", "number"],
        ans: "object" 
    },
    {
        question: "Which array method adds an item to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        ans: "push()" 
    },
    {
        question: "Which method selects the first element matching a CSS selector?",
        options: ["document.getElementsByClassName()", "document.querySelector()", "document.getElementByTag()", "document.selectAll()"],
        ans: "document.querySelector()" 
    },
    {
        question: "Which operator checks both value and type?",
        options: ["==", "=", "===", "!="],
        ans: "===" 
    },
    {
        question: "Which method attaches a click handler to an element?",
        options: ["addEventListener()", "onClickAdd()", "handleEvent()", "listenClick()"],
        ans: "addEventListener()"
    },
    {
        question: "What is the result of '5' + 3 in JavaScript?",
        options: ["8", "53", "NaN", "Error"],
        ans: "53" 
    },
    {
        question: "Which property sets the text of an element without parsing HTML?",
        options: ["innerHTML", "textContent", "outerHTML", "value"],
        ans: "textContent" 
    }
];

const quiz = document.getElementById("quiz");

let score = 0; // Initial Score
let currentIndex = 0; // Which question is showing to user (0 = first question)

function renderQuestions() {
    quiz.innerHTML = "";

    const currentQuestion = questions[currentIndex];

    // Question Progress
    const progress = document.createElement("p");
    progress.className = "progress-text";
    progress.textContent = `Quesion ${currentIndex + 1} of ${questions.length}`;
    quiz.appendChild(progress);

    // Question Text
    const question = document.createElement("h2");
    question.className = "question";
    question.textContent = currentQuestion.question;
    quiz.appendChild(question);
    
    const questionOption = document.createElement("div");
    questionOption.className = "options";
    quiz.appendChild(questionOption);
    
    for(let i = 0; i < currentQuestion.options.length; i++) {
        let button = document.createElement("button");
        button.className = "option";
        button.textContent = currentQuestion.options[i];

        button.addEventListener("click", function() {
            checkAnswer(button);
        })

        questionOption.appendChild(button);
    }

    const message = document.createElement("p");
    message.className = "feedback";
    message.id = "message";
    quiz.appendChild(message);

    const nextButton = document.createElement("button");
    nextButton.className = "btn";
    nextButton.id = "nextBtn";
    nextButton.textContent = "Next Question";
    nextButton.disabled = true;
    nextButton.addEventListener("click", nextQuestion);
    quiz.appendChild(nextButton);
}

// Check Answer for quiz
function checkAnswer(clickedButton) {
    let clickedAnswer = clickedButton.textContent;
    let correctAnswer = questions[currentIndex].ans;

    let message = document.getElementById("message");
    let allButtons = document.querySelectorAll(".option");

    if(clickedAnswer === correctAnswer) {
        score += 1;
        
        clickedButton.classList.add("correct");
        message.textContent = "Correct!";
        message.classList.add("good");
         
    } else {
        message.textContent = `Wrong! The correct answer is: ${correctAnswer}`;
        clickedButton.classList.add("wrong");
        message.classList.add("bad");

        for(let i = 0; i < allButtons.length; i++) {
            if(allButtons[i].textContent === correctAnswer) {
                allButtons[i].classList.add("correct");
            }
        }
    }

    for(let i = 0; i < allButtons.length; i++) {
        allButtons[i].disabled = true;
    }

    document.getElementById("nextBtn").disabled = false;
}

// Next Question
function nextQuestion() {
    currentIndex = currentIndex + 1;

    if(currentIndex < questions.length) {
        renderQuestions();
    } else {
        showResult();
    }
}

// Show Result
function showResult() {
    quiz.innerHTML = "";

    let feedback = "";

    if(score === 8) {
        feedback = "Prefert Score! Excellent Work.";
    } else if(score >= 6) {
        feedback = "Great job! You know your JavaScript.";
    } else if(score >= 4) {
        feedback = "Good effort. Keep Practicing";
    } else {
        feedback = "Keep learning and try again";
    }

    const result = document.createElement("h2");
    result.className = "result";
    result.textContent = `You scored ${score} of ${questions.length} - ${feedback}`;
    quiz.appendChild(result);

    const restartButton = document.createElement("button");
    restartButton.className = "btn";
    restartButton.id = "restartBtn";
    restartButton.textContent = "Restart Quiz";
    restartButton.addEventListener("click", restartQuiz);
    quiz.appendChild(restartButton);
}


// Restart the Quiz
function restartQuiz() {
    currentIndex = 0;
    score = 0;
    renderQuestions();
}

// Render Quiz Question
renderQuestions();