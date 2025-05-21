const questions = [
    {
        question: "In which year was Virat Kohli born?",
        answers: [
            { text: "1987", correct: false },
            { text: "1988", correct: true },
            { text: "1989", correct: false },
            { text: "1990", correct: false }
        ]
    },
    {
        question: "What is Virat Kohli's nickname?",
        answers: [
            { text: "King Kohli", correct: true },
            { text: "Run Machine", correct: false },
            { text: "The Wall", correct: false },
            { text: "Cheeku", correct: true } // Note: This question has two correct answers
        ]
    },
    {
        question: "Which IPL team does Virat Kohli play for?",
        answers: [
            { text: "Mumbai Indians", correct: false },
            { text: "Royal Challengers Bangalore", correct: true },
            { text: "Chennai Super Kings", correct: false },
            { text: "Kolkata Knight Riders", correct: false }
        ]
    },
    {
        question: "In which year did Virat Kohli make his international debut?",
        answers: [
            { text: "2006", correct: false },
            { text: "2007", correct: false },
            { text: "2008", correct: true },
            { text: "2009", correct: false }
        ]
    },
    {
        question: "What is Virat Kohli's highest score in Test cricket?",
        answers: [
            { text: "243", correct: false },
            { text: "254", correct: false },
            { text: "254*", correct: false },
            { text: "254 not out", correct: true }
        ]
    },
    {
        question: "Which award did Virat Kohli receive in 2018?",
        answers: [
            { text: "Padma Bhushan", correct: false },
            { text: "Padma Shri", correct: true },
            { text: "Bharat Ratna", correct: false },
            { text: "Arjuna Award", correct: false }
        ]
    },
    {
        question: "Virat Kohli is the fastest to reach 10,000 runs in which format?",
        answers: [
            { text: "Test", correct: false },
            { text: "ODI", correct: true },
            { text: "T20I", correct: false },
            { text: "All formats", correct: false }
        ]
    },
    {
        question: "Against which team did Virat Kohli score his first ODI century?",
        answers: [
            { text: "Australia", correct: false },
            { text: "Sri Lanka", correct: true },
            { text: "Pakistan", correct: false },
            { text: "South Africa", correct: false }
        ]
    },
    {
        question: "How many double centuries does Virat Kohli have in Test cricket?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false }
        ]
    },
    {
        question: "Virat Kohli was the captain of which Under-19 World Cup winning team?",
        answers: [
            { text: "2006", correct: false },
            { text: "2008", correct: true },
            { text: "2010", correct: false },
            { text: "2012", correct: false }
        ]
    },
    {
        question: "Which of these records does Virat Kohli hold in IPL?",
        answers: [
            { text: "Most runs in a single season", correct: false },
            { text: "Most centuries in IPL", correct: false },
            { text: "Most runs overall in IPL", correct: true },
            { text: "Highest individual score", correct: false }
        ]
    },
    {
        question: "Virat Kohli married which Indian actress?",
        answers: [
            { text: "Deepika Padukone", correct: false },
            { text: "Anushka Sharma", correct: true },
            { text: "Priyanka Chopra", correct: false },
            { text: "Kareena Kapoor", correct: false }
        ]
    },
    {
        question: "What is the name of Virat Kohli's foundation?",
        answers: [
            { text: "Kohli Foundation", correct: false },
            { text: "Virat Kohli Foundation", correct: false },
            { text: "Virat & Anushka Foundation", correct: false },
            { text: "Virat Kohli Foundation (VKF)", correct: true }
        ]
    },
    {
        question: "Which jersey number does Virat Kohli wear?",
        answers: [
            { text: "7", correct: false },
            { text: "18", correct: true },
            { text: "45", correct: false },
            { text: "99", correct: false }
        ]
    },
    {
        question: "Virat Kohli was awarded the Rajiv Gandhi Khel Ratna in which year?",
        answers: [
            { text: "2016", correct: false },
            { text: "2017", correct: false },
            { text: "2018", correct: true },
            { text: "2019", correct: false }
        ]
    },
    {
        question: "Against which team did Virat Kohli score his first Test century?",
        answers: [
            { text: "Australia", correct: true },
            { text: "England", correct: false },
            { text: "South Africa", correct: false },
            { text: "New Zealand", correct: false }
        ]
    },
    {
        question: "Virat Kohli has scored how many centuries in international cricket?",
        answers: [
            { text: "70+", correct: true },
            { text: "60-69", correct: false },
            { text: "50-59", correct: false },
            { text: "40-49", correct: false }
        ]
    },
    {
        question: "Which brand is Virat Kohli associated with as a co-owner?",
        answers: [
            { text: "PUMA", correct: false },
            { text: "Wrogn", correct: true },
            { text: "MRF", correct: false },
            { text: "Adidas", correct: false }
        ]
    },
    {
        question: "Virat Kohli stepped down as Test captain after which series?",
        answers: [
            { text: "England tour of India 2021", correct: false },
            { text: "India tour of South Africa 2021-22", correct: true },
            { text: "India tour of England 2021", correct: false },
            { text: "Australia tour of India 2020-21", correct: false }
        ]
    },
    {
        question: "Virat Kohli holds the record for fastest to 8,000, 9,000, and 10,000 runs in which format?",
        answers: [
            { text: "Test", correct: false },
            { text: "ODI", correct: true },
            { text: "T20I", correct: false },
            { text: "All of the above", correct: false }
        ]
    },
    {
        question: "Which of these awards has Virat Kohli NOT won?",
        answers: [
            { text: "ICC Cricketer of the Year", correct: false },
            { text: "ICC ODI Player of the Year", correct: false },
            { text: "ICC Test Player of the Year", correct: false },
            { text: "ICC Spirit of Cricket Award", correct: true }
        ]
    },
    {
        question: "Virat Kohli was the first Indian to score a century in which format?",
        answers: [
            { text: "Test cricket in Australia", correct: false },
            { text: "ODI World Cup debut", correct: false },
            { text: "Day/Night Test", correct: true },
            { text: "T20 World Cup", correct: false }
        ]
    },
    {
        question: "Virat Kohli has scored how many double centuries in ODIs?",
        answers: [
            { text: "0", correct: true },
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: false }
        ]
    },
    {
        question: "Which company did Virat Kohli sign his first endorsement deal with?",
        answers: [
            { text: "MRF", correct: false },
            { text: "Puma", correct: false },
            { text: "Boost", correct: true },
            { text: "TAG Heuer", correct: false }
        ]
    },
    {
        question: "Virat Kohli was the fastest to reach 10,000 runs in ODIs in terms of innings played. How many innings did he take?",
        answers: [
            { text: "205", correct: false },
            { text: "213", correct: false },
            { text: "217", correct: false },
            { text: "205", correct: true }
        ]
    },
    {
        question: "Virat Kohli holds the record for most runs in a single IPL season. How many runs did he score in that season?",
        answers: [
            { text: "735", correct: false },
            { text: "793", correct: false },
            { text: "863", correct: false },
            { text: "973", correct: true }
        ]
    },
    {
        question: "Against which team did Virat Kohli score his first T20I century?",
        answers: [
            { text: "Australia", correct: false },
            { text: "South Africa", correct: false },
            { text: "Afghanistan", correct: true },
            { text: "West Indies", correct: false }
        ]
    },
    {
        question: "Virat Kohli was the first Indian captain to win a Test series in which country?",
        answers: [
            { text: "England", correct: false },
            { text: "South Africa", correct: false },
            { text: "New Zealand", correct: false },
            { text: "Australia", correct: true }
        ]
    },
    {
        question: "Virat Kohli has scored centuries in how many different countries in Test cricket?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false }
        ]
    },
    {
        question: "Virat Kohli holds the record for most centuries while chasing in ODIs. How many centuries does he have while chasing?",
        answers: [
            { text: "20", correct: false },
            { text: "23", correct: false },
            { text: "25", correct: false },
            { text: "26", correct: true }
        ]
    }
];

const questionElement = document.getElementById("Que");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();