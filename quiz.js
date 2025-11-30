function checkAnswer() {
    // Identify the correct answer
    let correctAnswer = "4";

    // Retrieve the user's selected answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Compare answers and display feedback
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);