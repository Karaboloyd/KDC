const form = document.getElementById('quiz-form');
const resultDiv = document.getElementById('quiz-result');

const correctAnswers = {
  q1: 'b',
  q2: 'b',
  q3: 'a',
  q4: 'c',
  q5: 'c'
};

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let score = 0;
  let output = '<h2>Quiz Results</h2><ul>';

  for (let [key, correct] of Object.entries(correctAnswers)) {
    const userAnswer = form.elements[key]?.value;
    if (userAnswer === correct) {
      score++;
      output += `<li>Question ${key.slice(1)}: ✅ Correct</li>`;
    } else {
      output += `<li>Question ${key.slice(1)}: ❌ Incorrect (Correct: ${correct.toUpperCase()})</li>`;
    }
  }

  output += `</ul><p><strong>Your score: ${score}/5</strong></p>`;
  resultDiv.innerHTML = output;
});

// Timer for 10 minutes
let seconds = 10 * 60;
const timerDisplay = document.getElementById("quiz-timer");

function updateTimer() {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  timerDisplay.textContent = `Time Left: ${mins}:${secs < 10 ? '0' : ''}${secs}`;
  if (seconds <= 0) {
    form.submit();
  } else {
    seconds--;
    setTimeout(updateTimer, 1000);
  }
}

updateTimer();
