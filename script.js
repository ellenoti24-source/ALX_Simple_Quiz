// Retrieve the "Submit Answer" button
const submitButton = document.getElementById("submit-answer");

// Function that checks the user's answer
function checkAnswer() {

    // Retrieve the correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Retrieve the feedback element
    const feedback = document.getElementById("feedback");

    // Ensure an option is selected
    if (!selectedOption) {
        feedback.textContent = "Please select an answer before submitting.";
        return;
    }

    const userAnswer = selectedOption.value;

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        // Provide correct-answer feedback
        feedback.textContent = "Correct! Well done.";
    } else {
        // Provide incorrect-answer feedback
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the Submit Answer button
submitButton.addEventListener("click", checkAnswer);
