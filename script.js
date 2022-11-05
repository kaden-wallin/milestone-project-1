
//Create logic for talling scores

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


function resultsPage() {
    document.getElementById('whereToPutScore').innerHTML = localStorage.getItem("score");

}

// resultsPage()

// let message = "Your score is: "  +score + ", Thank you for playing!";

// let resultmessage = document.getElementById("resultH1")

// resultmessage.innerHTML = message;

// `Your score is ${score}, Thank you for playing!`;
// document.write("Your score is: "  +score + ", Thank you for playing!")



//Created a button on bottom of results page to let you retry the quiz and one to return you to hub
const resultsMessage = document.getElementsByClassName('resultMessage');

function returnToHub() {
    window.location.href = "../hub.html"
}

function retryQuiz(quiz) {
    window.location.href ="../quizzes/" + quiz + ".html"
}