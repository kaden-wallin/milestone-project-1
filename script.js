//Set up onclick functions for hub page

//Set up music to play onload of quiz tabs

//Create logic for talling scores
function results(quiz) {
    var score=0;
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
    alert("Your score is: " +score + ", Thank you for playing!")
}

function returnToHub() {
    window.location.href = "../hub.html"
}
//Set up different messages linked to what score (likely will be a case statement)

//Create links at bottom to get you to the top and/or get you to the hub and on the top to get you to the hub