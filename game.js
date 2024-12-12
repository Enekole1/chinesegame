let score = 0;
let questionIndex = 0;

const questions = [
    {
        question: "你是哪个国人?", // "Which country are you from?"
        answers: [
            "United States", // Correct answer
            "People",
            "Mexico"
        ],
        correctAnswer: "United States"
    },
    {
        question: "我住在哪里?", // "Where do I live?"
        answers: [
            "China",
            "Maryland", // Correct answer
            "Japan"
        ],
        correctAnswer: "Maryland"
    },
    {
        question: "‘guó’ 的意思是什么?", // "What does 'guó' mean?"
        answers: [
            "People",
            "Country", // Correct answer
            "City"
        ],
        correctAnswer: "Country"
    },
    {
        question: "‘Zhōng guó’ 是什么意思?", // "What is 'Zhōng guó' in English?"
        answers: [
            "United States",
            "China", // Correct answer
            "England"
        ],
        correctAnswer: "China"
    },
    {
        question: "‘rén’ 的意思是什么?", // "What does 'rén' mean?"
        answers: [
            "Country",
            "People", // Correct answer
            "City"
        ],
        correctAnswer: "People"
    }
];

function displayQuestion() {
    const currentQuestion = questions[questionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    const answers = currentQuestion.answers;
    for (let i = 0; i < 3; i++) {
        document.getElementById("answer" + (i + 1)).innerText = answers[i];
    }
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[questionIndex];
    const correctAnswer = currentQuestion.correctAnswer;
    const selectedAnswerText = currentQuestion.answers[selectedAnswer - 1];
    
    if (selectedAnswerText === correctAnswer) {
        score++;
        alert("Correct!");
    } else {
        alert("Try again!");
    }

    questionIndex++;
    if (questionIndex >= questions.length) {
        alert("Game over! Your final score is: " + score);
        score = 0; // Reset score after game over
        questionIndex = 0; // Reset question index
    }
    document.getElementById("score").innerText = "Score: " + score;
    displayQuestion();
}

displayQuestion();
