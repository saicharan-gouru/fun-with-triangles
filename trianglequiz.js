const quizForm = document.querySelector(".quiz-form");
const btnCheck = document.querySelector("#btn-check");
const output = document.querySelector("#output");
const correctAnswers = [90, 180];



function calculateScore() {
    let score = 0;
    let index = 0;

    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (Number(value) === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    output.innerText = "Your Score Is : " + score;

}


btnCheck.addEventListener("click", calculateScore);