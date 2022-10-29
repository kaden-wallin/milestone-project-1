//Set up onclick functions for hub page

//Set up music to play onload of quiz tabs

//Create logic for talling scores
let score=0;
function check(id) {
    var question = document.getElementsById(id);
    for (var i=0; i<question.length; i++) {
         if (question[i].checked == true) {
             score +=1;
             console.log(score)
            }
   }
}

function channelSurf() {
    let opac = document.getElementsByClassName('linkImgs')
    opac.style.opacity='0.5'
}
//Set up different messages linked to what score (likely will be a case statement)

//Create links at bottom to get you to the top and/or get you to the hub and on the top to get you to the hub