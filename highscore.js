var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var tryAgain = document.querySelector("#tryAgain");

// to clear the scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// to retrieve the local stroage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}
// event listener to move to the index page through click
tryAgain.addEventListener("click", function () {
    window.location.replace("./index.html");
});