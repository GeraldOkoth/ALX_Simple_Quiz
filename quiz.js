const submit = document.getElementById("submit-answer");

function checkAnswer() {
  const correctAnswer = "4";

  const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
  const feedback = document.getElementById("feedback");

  if (!userAnswer) {
    feedback.textContent = "Please select an answer.";
    return;
  }
  else if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

submit.addEventListener("click", checkAnswer);
