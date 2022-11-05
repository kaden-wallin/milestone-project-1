
//Logic for talling score and opening results page
function results(quiz) {
    let score= 0;
    if (document.getElementById(quiz + 1).checked) {
        score++;
    }
    if (document.getElementById(quiz + 2).checked) {
        score++;
    }
    if (document.getElementById(quiz + 3).checked) {
        score++;
    }
    if (document.getElementById(quiz + 4).checked) {
        score++;
    }
    if (document.getElementById(quiz + 5).checked) {
        score++;
    }

    localStorage.setItem("score", score)

    window.location.href = "../results/" + quiz + "Results.html";


}

//Logic to show score on results page
function resultsPage() {
    document.getElementById('whereToPutScore').innerHTML = localStorage.getItem("score");

}

//Created a button on bottom of results page to let you retry the quiz and one to return you to hub
function returnToHub() {
    window.location.href = "../hub.html"
}

function retryQuiz(quiz) {
    window.location.href ="../quizzes/" + quiz + ".html"
}