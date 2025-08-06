const form = document.getElementById('test-form');
const resultDiv = document.getElementById('result');

const correctAnswers = {
  q1: "b",
  q2: "b",
  q3: "c",
  q4: "c",
  q5: "c",
  q6: "b",
  q7: "c",
  q8: "a",
  q9: "a",
  q10: "c"
};

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let score = 0;
  let feedback = '<h2>Test Results</h2><ul>';

  for (let [key, value] of Object.entries(correctAnswers)) {
    const userAnswer = form.elements[key]?.value;
    if (userAnswer === value) {
      score++;
      feedback += `<li>Question ${key.slice(1)}: ✅ Correct</li>`;
    } else {
      feedback += `<li>Question ${key.slice(1)}: ❌ Incorrect (Correct: ${value.toUpperCase()})</li>`;
    }
  }

  feedback += `</ul><p><strong>Your score: ${score}/10</strong></p>`;
  resultDiv.innerHTML = feedback;
});

// Timer Logic (60 mins)
let timeLeft = 60 * 60; // in seconds
const timerDisplay = document.getElementById("timer");

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `Time Remaining: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  if (timeLeft <= 0) {
    form.submit();
  } else {
    timeLeft--;
    setTimeout(updateTimer, 1000);
  }
}

updateTimer();
