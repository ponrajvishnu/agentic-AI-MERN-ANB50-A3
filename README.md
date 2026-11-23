# Interactive JavaScript Quiz App

A simple multiple-choice quiz built with HTML, CSS and JavaScript. Questions and options are created dynamically using DOM methods.

## Features

- 8 multiple-choice questions, each with 4 options
- Correct answer turns **green**, wrong answer turns **red**
- If you pick a wrong option, the correct answer is revealed
- Score is tracked while you play
- "Next Question" button stays disabled until you choose an option
- Final screen shows your score with a feedback message
- "Restart Quiz" button to play again

## Project Structure

```
quiz-app/
├── index.html   # Page structure (empty container, no question HTML)
├── style.css    # Styling and answer colors
├── script.js    # Quiz logic
└── README.md
```

## How It Works

| Function | What it does |
|----------|--------------|
| `renderQuestions()` | Builds the question text and 4 option buttons on the page |
| `checkAnswer()` | Highlights the answer, updates the score, enables the Next button |
| `nextQuestion()` | Moves to the next question using `currentIndex` |
| `showResult()` | Shows the final score and feedback message |
| `restartQuiz()` | Resets `currentIndex` and `score`, then shows question 1 |

## Score Feedback

| Score | Message |
|-------|---------|
| 8 | Perfect score! Excellent work. |
| 6 – 7 | Great job! You know your JavaScript. |
| 4 – 5 | Good effort. Keep practicing. |
| 0 – 3 | Keep learning and try again. |

## Concepts Used

- Arrays and objects
- Loops
- DOM manipulation (`createElement`, `appendChild`, `textContent`)
- Event handling (`addEventListener`)
