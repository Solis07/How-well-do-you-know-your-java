var scoresList = document.querySelector(".scoresList")
var clearButton = document.querySelector(".clear-button")

var scores = JSON.parse(localStorage.getItem("scores"))

// Displays the scores in the high scores page.

function renderScores() {
  for (let i = 0; i < scores.length; i++) {
    var li = document.createElement("li")
    li.innerHTML = `${scores[i].initials} - ${scores[i].score}`
    scoresList.append(li)
  }
}

renderScores()

// Resets the high score page.

clearButton.addEventListener("click", function () {
  localStorage.clear()
  window.location.reload()
})