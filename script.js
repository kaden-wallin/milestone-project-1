//Create logic for talling scores
async function results(quiz) {
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

    window.location.href = "../results/" + quiz + "Results.html";
    
    let message = "Your score is: "  +score + ", Thank you for playing!";
    
    let resultmessage = document.getElementById("resultH1")
    
    resultmessage.innerHTML = message;
}
//Set up different messages linked to what score (likely will be a case statement)

//Create links at bottom to get you to the top and/or get you to the hub and on the top to get you to the hub
function returnToHub() {
    window.location.href = "../hub.html"
}