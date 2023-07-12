var scoresList = document.querySelector(".scoresList")
var clearButton = document.querySelector(".clear-button")

var scores = JSON.parse(localStorage.getItem("scores"))

function renderScores() {
  for (let i = 0; i < scores.length; i++) {
    var li = document.createElement("li")
    li.innerHTML = `${scores[i].initials} - ${scores[i].score}`
    scoresList.append(li)
  }
}

renderScores()

clearButton.addEventListener("click", function () {
  localStorage.clear()
  window.location.reload()
})