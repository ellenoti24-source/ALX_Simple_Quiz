document.addEventListener("DOMContentLoaded", function () {
    function checkAnswer() {
        // Correct answer
        const correctAnswer = "4";

        // Find the checked radio (may be null if nothing selected)
        const checked = document.querySelector('input[name="quiz"]:checked');

        // Feedback element
        const feedbackEl = document.getElementById("feedback");

        // Defensive checks
        if (!feedbackEl) {
            console.error("No element with id 'feedback' found in the DOM.");
            return;
        }

        if (!checked) {
            // No option selected — show friendly message and stop
            feedbackEl.textContent = "Please select an answer before submitting.";
            feedbackEl.style.color = "#dc3545";
            return;
        }

        const userAnswer = checked.value;

        if (userAnswer === correctAnswer) {
            feedbackEl.textContent = "Correct! Well done.";
            feedbackEl.style.color = "#28a745";
        } else {
            feedbackEl.textContent = "That's incorrect. Try again!";
            feedbackEl.style.color = "#dc3545";
        }
    }

    const btn = document.getElementById("submit-answer");
    if (!btn) {
        console.error("No element with id 'submit-answer' found in the DOM.");
        return;
    }
    btn.addEventListener("click", checkAnswer);
});
